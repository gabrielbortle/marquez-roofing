'use client';

import { useMemo, useState } from 'react';
import styles from './ContactForm.module.css';

const SERVICE_OPTIONS = [
  'Architectural shingles',
  'Metal roof',
  'Roof repair or remodel',
  'Inspection / maintenance',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  timeline: '',
  message: '',
  honeypot: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const isSubmitting = status.state === 'loading';

  const requiredMissing = useMemo(
    () => !form.name.trim() || !form.email.trim() || !form.message.trim(),
    [form.email, form.message, form.name],
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(previous => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (form.honeypot) {
      return;
    }

    if (requiredMissing) {
      setStatus({ state: 'error', message: 'Please fill in name, email, and project details.' });
      return;
    }

    try {
      setStatus({ state: 'loading', message: 'Sending your request...' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus({
        state: 'success',
        message: "Thanks! We've received your request and will reach out shortly.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>Tell us about your roof.</h2>
          <p>
            Share a few details and we’ll respond within one business day with next steps. No spam,
            just straight answers from our roofing pros.
          </p>
        </div>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit} aria-live="polite">
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className={styles.honeypot}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className={styles.twoUp}>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.twoUp}>
              <div className={styles.fieldGroup}>
                <label htmlFor="service">Project type</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  {SERVICE_OPTIONS.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="timeline">Timeline</label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  value={form.timeline}
                  onChange={handleChange}
                  placeholder="ASAP, next month, this season..."
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message">Project details*</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about the roof, location, and what you need."
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || requiredMissing}
            >
              {isSubmitting ? 'Sending...' : 'Send my request'}
            </button>

            {status.message && (
              <p
                className={`${styles.status} ${
                  status.state === 'error' ? styles.error : styles.success
                }`}
              >
                {status.message}
              </p>
            )}

            <p className={styles.footnote}>
              We reply within one business day. Your info stays private and is only used to contact
              you about your request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
