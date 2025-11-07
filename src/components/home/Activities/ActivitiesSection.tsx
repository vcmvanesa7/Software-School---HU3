"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Activities.module.css";
import CardHome from "../cardHome/CardHome";

const activities = [ 
  { icon: "lucide:Music4", title: "Music", desc: "Clases de música para todas las edades." },
  { icon: "lucide:theater", title: "Theater", desc: "Desarrolla tus habilidades actorales." },
  { icon: "lucide:dance", title: "Dance", desc: "Baila y expresa con movimiento." },
  { icon: "lucide:palette", title: "Art", desc: "Pintura, recortes y creatividad sin límites." },
];

export default function Activities() {
  return (
    <section className={styles.activities}>
      <h2>Nuestras Actividades</h2>
      <div className={styles.grid}>
        {activities.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <CardHome>
              <div className={styles.emoji}>{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </CardHome>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
