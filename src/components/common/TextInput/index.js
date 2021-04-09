import React from "react";
import styles from "./style.module.scss";

export default function TextInput(props) {
  const { inputRef } = props;

  return <input className={styles.input} ref={inputRef} />;
}
