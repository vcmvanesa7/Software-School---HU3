"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Activities.module.css";
import { CardHome } from "../cardHome/CardHome";
import { Music, Drama, Drum, Palette } from "lucide-react";

const activities = [
  {
    icon: Music,
    title: "Music",
    desc: "Clases de música para todas las edades.",
  },
  {
    icon: Drama,
    title: "Theater",
    desc: "Desarrolla tus habilidades actorales.",
  },
  { icon: Drum, title: "Dance", desc: "Baila y expresa con movimiento." },
  {
    icon: Palette,
    title: "Art",
    desc: "Pintura, recortes y creatividad sin límites.",
  },
];
export default function ActivitiesSection() {
  return (
    <section className={styles.activities}>
      <h2>Nuestras Actividades</h2>
      <div className={styles.grid}>
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <CardHome>
                <div className={styles.icon}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles.title}>{a.title}</h3>
                <p>{a.desc}</p>
              </CardHome>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}