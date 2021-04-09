import React from "react";
import styles from "./style.module.scss";

export default function Button(props) {
  const { children, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
