"use client";
import React from "react";
import styles from "./ButtonHome.module.css";

type Props = {
  variant?: "primary" | "ghost" | "cta";
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ButtonHome({ variant = "primary", children, onClick }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
