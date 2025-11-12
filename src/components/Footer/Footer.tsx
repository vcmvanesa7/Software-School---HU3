"use client";
import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={styles.footer}
    >
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.special}`}> 
          <Link href="/">
            <img
              src="/img/logotipo.png"
              alt="Kirin Art School Logo"
              width="100px"
            />
          </Link>
          <p className={styles.description}>
            Where imagination meets color, and learning becomes art.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <ul className={styles.links}>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={18} className={styles.icon} /> 3127264706
            </li>
            <li>
              <Mail size={18} className={styles.icon} /> schoolkirinart@gmail.com
            </li>
            <li>
              <MapPin size={18} className={styles.icon} /> Magic City
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/">
              <Facebook size={22} className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram size={22} className={styles.icon} />
            </a>
            <a href="https://x.com/">
              <Twitter size={22} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.icon}>
          © {new Date().getFullYear()} Kirin Art School — All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
