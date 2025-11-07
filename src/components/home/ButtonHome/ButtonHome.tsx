// components/ui/Button.tsx
"use client";
import React from "react";
import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "cta";
};

export default function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <button
      className={`${styles.base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
