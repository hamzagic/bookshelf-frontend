import Image from 'next/image';
import styles from './BookItem.module.css';

const BookItem = () => {
  return(
    <div className={styles.container}>
      <Image src="/images/book-placeholder.png" width={50} height={50} alt="" />
      <p className={styles.title}>Book Title</p>
      <p className={styles.author}>Book Author</p>
    </div>
  );
}

export default BookItem;