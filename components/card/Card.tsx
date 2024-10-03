import styles from "./Card.module.css";

const Card = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export default Card;
