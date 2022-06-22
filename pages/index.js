import React, { useState } from "react";
import styles from "./app.module.scss";
import cn from "classnames";

function HomePage() {
  const LEFT_SIDE_HOVERED = "LEFT_SIDE_HOVERED";
  const RIGHT_SIDE_HOVERED = "RIGHT_SIDE_HOVERED";
  const NONE_SIDE_HOVERED = "NONE_SIDE_HOVERED";

  const [hoveredSide, setHoveredSide] = useState(NONE_SIDE_HOVERED);
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.container, {
          [styles.hoverLeft]: hoveredSide === LEFT_SIDE_HOVERED,
          [styles.hoverRight]: hoveredSide === RIGHT_SIDE_HOVERED,
        })}
      >
        <div
          className={cn(styles.split, styles.left)}
          onMouseEnter={() => {
            setHoveredSide(LEFT_SIDE_HOVERED);
          }}
        >
          <h1 className={styles.title}>For Creators</h1>
          <a href="/creator" className={styles.btn}>
            CREATE
          </a>
        </div>
        <div
          className={cn(styles.split, styles.right)}
          onMouseEnter={() => {
            setHoveredSide(RIGHT_SIDE_HOVERED);
          }}
        >
          <h1 className={styles.title}>For Collectors</h1>
          <a href="/collector" className={styles.btn}>
            COLLECT
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
