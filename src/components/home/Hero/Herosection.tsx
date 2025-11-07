"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import ButtonHome from "../ButtonHome/ButtonHome";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/videos/HeroHome.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          kirin Art School
        </h1>
        <p>Aprendemos jugando, soñando y creando juntos.</p>
        <div className={styles.buttons}>
          <ButtonHome variant="cta">Inscríbete</ButtonHome>
          <ButtonHome variant="ghost">Conócenos</ButtonHome>
        </div>
        <image
          src="/images/mascotHero.png"
          alt="Mascota"
          className={styles.mascot}
        />
      </motion.div>
    </section>
  );
}
