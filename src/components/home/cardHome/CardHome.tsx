import React from "react";
import styles from "./CardHome.module.css";

export default function CardHome({ children }: { children: React.ReactNode }) {
  return <div className={styles.card}>{children}</div>;
}
