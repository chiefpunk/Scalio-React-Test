import React from "react";
import styles from "./style.module.scss";

export default function Card(props) {
  const { children } = props;

  return <div className={styles.card}>{children}</div>;
}
