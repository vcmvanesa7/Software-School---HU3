"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Kirin Art School
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={styles.lead}
          >
            Elite training for young artists — cultivating craft, curiosity and
            creative leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.heroCTA}
          >
            <a className={styles.ctaPrimary} href="/register">
              Request a tour
            </a>
            <a className={styles.ctaGhost} href="/contact">
              Contact admissions
            </a>
          </motion.div>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.mediaFrame}>
            <Image
              src="/images/school-photo.jpg"
              alt="Kirin Art School - Campus view"
              width={680}
              height={430}
              className={styles.coverImage}
              priority
            />
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className={styles.text}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          At Kirin Art School we nurture the next generation of creative
          leaders. We combine rigorous technique with cross-disciplinary
          thinking, mentorship from professional artists and a deep respect for
          each child’s unique voice.
        </motion.p>
      </section>

      {/* PROGRAMS */}
      <section className={styles.sectionAlt}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Programs
        </motion.h2>

        <div className={styles.grid}>
          <motion.article
            className={styles.card}
            whileHover={{ y: -6, scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>Visual Arts</h3>
            <p>Painting, drawing, sculpture and portfolio preparation.</p>
          </motion.article>

          <motion.article
            className={styles.card}
            whileHover={{ y: -6, scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            <h3>Performing Arts</h3>
            <p>Theatre, music and dance with public performance opportunities.</p>
          </motion.article>

          <motion.article
            className={styles.card}
            whileHover={{ y: -6, scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.4 }}
          >
            <h3>Creative Labs</h3>
            <p>Design thinking, digital arts, and collaborative studio projects.</p>
          </motion.article>
        </div>
      </section>

      {/* FACULTY */}
      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Faculty & Mentors
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.6 }}
        >
          Our team blends practicing artists, experienced educators and guest
          masters. Small class sizes ensure personalized instruction and
          mentorship pathways for advanced students.
        </motion.p>
      </section>

      {/* FACILITIES (PHOTO SPACE) */}
      <section className={styles.sectionAlt}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Facilities
        </motion.h2>

        <div className={styles.facilities}>
          <div className={styles.photoPlaceholder}>
            {/* Space for a large image of the school - replace src below */}
            <Image
              src="/images/school-photo-2.jpg"
              alt="Interior studio at Kirin Art School"
              width={760}
              height={420}
              className={styles.facilityImage}
            />
          </div>

          <div className={styles.facilitiesText}>
            <p>
              Bright studios, soundproofed practice rooms, a mini theater and a
              materials library — designed for focused learning and inspiring
              exhibitions.
            </p>
            <ul className={styles.featureList}>
              <li>Studio spaces for painting & sculpture</li>
              <li>Dedicated rehearsal rooms</li>
              <li>Children-friendly workshop areas</li>
              <li>Annual student showcase & gallery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What families say
        </motion.h2>

        <div className={styles.testimonials}>
          <motion.blockquote
            className={styles.quote}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            “Kirin’s teachers helped my child find confidence and discipline —
            performances and portfolio reviews are outstanding.”
            <cite>— A. Robertson</cite>
          </motion.blockquote>

          <motion.blockquote
            className={styles.quote}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            “A school where creativity meets academic rigor — truly elite.”
            <cite>— S. Park</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionCTA}>
        <motion.h2
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Visit Kirin Art School
        </motion.h2>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href="/register">
            Book a campus tour
          </a>
          <a className={styles.ctaGhost} href="/contact">
            Request more info
          </a>
        </div>
      </section>
    </main>
  );
}
