import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import React from 'react';
import { NextSeo } from 'next-seo';
import PortfolioHero from '@/components/PortfolioHero/PortfolioHero';
import PortfolioGallery from '@/components/PortfolioGallery/PortfolioGallery';
import { galleryCategories } from '@/data/galleryCategories';

const allowedImageExtensions = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
  '.heic',
  '.heif',
]);
const allowedVideoExtensions = new Set(['.mp4', '.mov', '.webm', '.m4v']);

const createBlurDataURL = async filePath => {
  try {
    const buffer = await sharp(filePath)
      .resize(24, 24, { fit: 'inside' })
      .webp({ quality: 55 })
      .toBuffer();

    return `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.warn(`Unable to generate blur for ${filePath}`, error);
    return null;
  }
};

const fileTimestamp = async filePath => {
  try {
    const stats = await fs.stat(filePath);
    return Math.max(stats.mtimeMs, stats.ctimeMs, stats.birthtimeMs ?? 0);
  } catch (error) {
    console.warn(`Unable to read file metadata for ${filePath}`, error);
    return 0;
  }
};

const formatProjectName = baseName => {
  const cleaned = baseName
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned || /^\d+$/.test(cleaned)) {
    return 'Custom Roof Project';
  }

  return cleaned
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const buildGalleryItems = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const items = [];
  const categoryOrder = new Map(
    galleryCategories.map((category, index) => [category.value, index]),
  );

  for (const category of galleryCategories) {
    const folderPath = path.join(publicDir, category.folder);
    let entries = [];

    try {
      entries = await fs.readdir(folderPath);
    } catch (error) {
      console.warn(`Unable to read assets from ${folderPath}`, error);
      continue;
    }

    entries.sort();

    for (const fileName of entries) {
      const ext = path.extname(fileName).toLowerCase();

      const isImage = allowedImageExtensions.has(ext);
      const isVideo = allowedVideoExtensions.has(ext);

      if (!isImage && !isVideo) {
        continue;
      }

      const baseName = path.basename(fileName, ext);
      const absolutePath = path.join(folderPath, fileName);

      const project = formatProjectName(baseName);
      const publicPath = `/${category.folder}/${fileName}`;
      const blurDataURL = isImage ? await createBlurDataURL(absolutePath) : null;
      const createdAt = await fileTimestamp(absolutePath);

      items.push({
        id: `${category.value}-${baseName}`.toLowerCase(),
        type: category.value,
        label: category.label,
        src: publicPath,
        alt: `${project} | ${category.label} in ${category.defaultLocation}`,
        project,
        location: category.defaultLocation,
        blurDataURL,
        mediaType: isVideo ? 'video' : 'image',
        createdAt,
      });
    }
  }

  items.sort((a, b) => {
    const categoryPositionA = categoryOrder.get(a.type) ?? Number.MAX_SAFE_INTEGER;
    const categoryPositionB = categoryOrder.get(b.type) ?? Number.MAX_SAFE_INTEGER;

    if (categoryPositionA !== categoryPositionB) {
      return categoryPositionA - categoryPositionB;
    }

    if (a.createdAt !== b.createdAt) {
      return b.createdAt - a.createdAt;
    }

    return a.project.localeCompare(b.project);
  });

  return items;
};

export async function getStaticProps() {
  const galleryItems = await buildGalleryItems();

  return {
    props: {
      galleryItems,
    },
    revalidate: 60 * 60, // refresh every hour in case new media is added
  };
}

export default function Portfolio({ galleryItems }) {
  const ogImage =
    galleryItems.find(item => item.mediaType === 'image')?.src ||
    '/images/portfolioImage1.jpg';

  return (
    <>
      <NextSeo
        title="Roofing Portfolio | Marquez Roofing in Cache Valley, UT"
        description="Browse recent architectural shingles, metal roofs, and roof repair projects across Cache Valley. See why homeowners trust Marquez Roofing."
        canonical="https://marquezroofing.com/portfolio"
        openGraph={{
          url: 'https://marquezroofing.com/portfolio',
          title: 'Roofing Portfolio | Marquez Roofing',
          description:
            'Explore architectural shingles, metal roofs, and repair projects completed by Marquez Roofing in Cache Valley, Utah.',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'Marquez Roofing portfolio project',
            },
          ],
        }}
      />
      <PortfolioHero />
      <PortfolioGallery items={galleryItems} />
    </>
  );
}
