import styles from './LatestActivity.module.css';

const LatestActivity = () => {
  // these data will come from backend
  const date = 'September 9, 2024';
  const bookTitle = 'Shadows';
  return (
    <div className={styles.container}>
      <div>{date}</div>
      <div>{bookTitle}</div>
    </div>
  );
}

export default LatestActivity;