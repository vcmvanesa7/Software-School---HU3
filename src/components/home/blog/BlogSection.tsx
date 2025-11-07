"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";
import CardHome from "../cardHome/CardHome";
import ButtonHome from "../ButtonHome/ButtonHome";

const posts = [
  { title: "Creatividad desde casa", excerpt: "Consejos para potenciar la imaginación con materiales simples.", date: "2025-10-05" },
  { title: "Rutinas felices", excerpt: "Cómo crear hábitos positivos en los peques cada mañana.", date: "2025-09-21" },
];

export default function BlogSection() {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <h2>Blog Arcoíris</h2>
        <ButtonHome variant="ghost">Ver más</ButtonHome>
      </div>

      <div className={styles.grid}>
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <CardHome>
              <h3>{p.title}</h3>
              <p className={styles.excerpt}>{p.excerpt}</p>
              <ButtonHome variant="primary">Leer más</ButtonHome>
            </CardHome>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
