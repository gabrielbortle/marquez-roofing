'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { galleryCategories } from '@/data/galleryCategories';
import styles from './PortfolioGallery.module.css';

const filters = galleryCategories.map(({ label, value }) => ({ label, value }));
const ITEMS_PER_BATCH = 9;
const FALLBACK_BLUR_DATA_URL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

const PortfolioGallery = ({ items = [] }) => {
  const availableFilters = useMemo(
    () => filters.filter(filter => items.some(item => item.type === filter.value)),
    [items],
  );

  const [activeFilter, setActiveFilter] = useState(
    availableFilters[0]?.value ?? filters[0].value,
  );
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);

  useEffect(() => {
    if (!availableFilters.length) {
      return;
    }

    if (!availableFilters.some(filter => filter.value === activeFilter)) {
      setActiveFilter(availableFilters[0].value);
    }
  }, [availableFilters, activeFilter]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [activeFilter]);

  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (!items.length) {
      return [];
    }

    const subset = items.filter(item => item.type === activeFilter);
    return subset.length ? subset : items;
  }, [activeFilter, items]);

  const displayedItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount],
  );

  const canLoadMore = visibleCount < filteredItems.length;

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleCloseModal, selectedItem]);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [selectedItem]);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Recent Work</p>
          <h2>See the roofs Cache Valley trusts.</h2>
          <p>
            Tap a category to explore how our crew handles premium shingles, precision metal installs,
            and detailed repair or remodel projects.
          </p>
        </div>

        <div className={styles.filters} aria-label="Portfolio filters">
          {(availableFilters.length ? availableFilters : filters).map(filter => (
            <button
              key={filter.value}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === filter.value ? styles.activeFilter : ''
              }`}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {!filteredItems.length ? (
          <p className={styles.emptyState}>Media coming soon. Check back shortly!</p>
        ) : (
          <div className={styles.grid}>
            {displayedItems.map(item => (
              <article key={item.id} className={styles.card}>
                <button
                  type="button"
                  className={styles.mediaButton}
                  onClick={() => setSelectedItem(item)}
                  aria-label={`Open ${item.mediaType === 'video' ? 'video' : 'photo'} from ${item.label}`}
                  title={`${item.project} in ${item.location}`}
                >
                  <div className={styles.mediaWrapper}>
                    {item.mediaType === 'video' ? (
                      <>
                        <video
                          className={`${styles.media} ${styles.video}`}
                          muted
                          playsInline
                          preload="none"
                          src={item.src}
                          poster={item.blurDataURL ?? undefined}
                        />
                        <span className={styles.badge}>Video</span>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
                        className={styles.media}
                        loading="lazy"
                        quality={70}
                        placeholder="blur"
                        blurDataURL={item.blurDataURL ?? FALLBACK_BLUR_DATA_URL}
                      />
                    )}
                    <div className={styles.mediaOverlay} />
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}

        {canLoadMore && (
          <div className={styles.loadMoreWrapper}>
            <button
              type="button"
              className={styles.loadMoreButton}
              onClick={() =>
                setVisibleCount(previous =>
                  Math.min(filteredItems.length, previous + ITEMS_PER_BATCH),
                )
              }
            >
              Load more work
            </button>
          </div>
        )}
      </div>

      {selectedItem && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.alt}
          onClick={handleCloseModal}
        >
          <div
            className={styles.modalContent}
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={event => {
                event.stopPropagation();
                handleCloseModal();
              }}
              aria-label="Close media preview"
            >
              X
            </button>

            <div className={styles.modalMedia}>
              {selectedItem.mediaType === 'video' ? (
                <video
                  className={styles.modalVideo}
                  src={selectedItem.src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div className={styles.modalImageWrapper}>
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    sizes="90vw"
                    className={styles.modalImage}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
