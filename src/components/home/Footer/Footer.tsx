"use client";
import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.footer}
    >
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>School</h3>
          <p>Aprender jugando, soñar despiertos y crear sonrisas.</p>
        </div>
        <div className={styles.col}>
          <h4>Explora</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#activities">Actividades</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contacto</h4>
          <p>📞 601 555 1234</p>
          <p>📍 Ciudad Mágica</p>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Arcoíris — Todos los derechos reservados.</p>
    </motion.footer>
  );
}
