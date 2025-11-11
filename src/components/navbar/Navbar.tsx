"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Kirin<span>Art</span></Link>
      </div>

      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Register</Link>
      </div>

      <button className={styles.menuBtn} onClick={toggleMenu}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
