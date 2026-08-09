"use client";

import styles from "./BubbleText.module.css";

export default function BubbleText({ text = "Grid & Logic", className = "" }) {
  return (
    <h2 className={`text-center text-5xl font-thin text-primary ${className}`}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
}
