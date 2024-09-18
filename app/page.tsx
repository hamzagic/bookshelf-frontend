'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <h3 className={styles.h3}>Bookshelf</h3>
        <h1 className={styles.h1}>Enhance Your Reading Experience</h1>
        <div className={styles.description}>Track your reading habits, monitor book progress & view insightful statistics on your reading sessions.</div>
        <Button text='Get Started' onclick={() => {}} />
      </div>
      <div className={styles.right}>
        <Image src='/images/bookimg.png' alt='books' width={300} height={300} />
      </div>
    </div>
  );
}
