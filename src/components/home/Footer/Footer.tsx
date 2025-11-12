"use client";

import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={`${styles.footer} mt-16`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-10"
      >
        <div className={`${styles.grid} gap-8`}>
          {/* --- Columna 1 --- */}
          <div>
            <h3 className={styles.logo}>School</h3>
            <p className={styles.desc}>
              Un espacio para descubrir, imaginar y aprender con alegría.
            </p>
          </div>

          {/* --- Columna 2 --- */}
          <div>
            <h4 className={styles.subtitle}>Enlaces</h4>
            <ul className={styles.links}>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#activities">Actividades</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* --- Columna 3 --- */}
          <div>
            <h4 className={styles.subtitle}>Contáctanos</h4>
            <ul className={styles.contact}>
              <li>📍 Calle Alegría #45, Ciudad Mágica</li>
              <li>📞 (601) 555-1234</li>
              <li>✉️ contacto@arcoiris.edu</li>
            </ul>
          </div>

          {/* --- Columna 4 --- */}
          <div>
            <h4 className={styles.subtitle}>Síguenos</h4>
            <div className={styles.socials}>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank">📘</a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank">📸</a>
              <a href="https://tiktok.com" aria-label="TikTok" target="_blank">🎵</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Escuela Mágica Arcoíris. Todos los derechos reservados.</p>
          <p className={styles.madeBy}>
            Hecho con 💛 por <span className={styles.brand}>tu equipo creativo</span>.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
