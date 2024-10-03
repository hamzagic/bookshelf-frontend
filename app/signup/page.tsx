"use client";
import { useState } from "react";

import styles from "./page.module.css";
import Button from "@/components/button/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = () => {};
  const handleUsername = () => {};
  const handlePassword = () => {};
  const handleRepeatPassword = () => {};
  const submit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.h1}>Create Account</h1>
        <div className={styles.item}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email">Password:</label>
          <input
            type="text"
            placeholder="Password"
            className={styles.input}
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email">Repeat Password:</label>
          <input
            type="text"
            placeholder="Repeat Password"
            className={styles.input}
            onChange={handleRepeatPassword}
            value={repeatPassword}
          />
        </div>
        <div className={[styles.item, styles.btnContainer].join(" ")}>
          <Button
            text="Submit"
            onclick={submit}
            disabled={!email || !password}
          />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Signup;
