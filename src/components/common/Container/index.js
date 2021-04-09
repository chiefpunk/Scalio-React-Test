import React from "react";
import styles from "./style.module.scss";

export default function Container(props) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
