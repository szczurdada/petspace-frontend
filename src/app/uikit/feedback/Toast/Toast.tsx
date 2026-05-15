"use client";

import { ToastContainer } from "react-toastify";
import styles from "./Toast.module.scss";

export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop
      closeOnClick
      pauseOnHover
      className={styles.container}
      toastClassName={styles.toast}
    />
  );
};