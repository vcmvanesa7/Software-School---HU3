"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Menu, X, House, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img src="/img/logotipo.png" alt="Kirin Art School Logo" width="100px" />
      </Link>

      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <div className={styles.sectionCenter}>
          <Link href="/about">About Us</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.sectionRight}>
          <Link href="/" className={styles.iconLink}>
            <House size={18} />
            <span>Home</span>
          </Link>

          <Link href="/register" className={styles.iconLink}>
            <User size={18} />
            <span>Register</span>
          </Link>
        </div>
      </div>

      <button className={styles.menuBtn} onClick={toggleMenu}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
