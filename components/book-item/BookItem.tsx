import Image from "next/image";
import styles from "./BookItem.module.css";

// todo: add reading percentage, add options to delete book or edit book data
const BookItem = ({
  book,
}: {
  book: { title: string; author: string; pages: number };
}) => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/book-placeholder.png"
        width={50}
        height={50}
        alt="Book cover"
      />
      <p className={styles.title}>{book.title}</p>
      <p className={styles.author}>{book.author}</p>
      <p className={styles.pages}>{book.pages} pages</p>
      <div>5% completed</div>
      <div>edit</div>
      <div>delete</div>
    </div>
  );
};

export default BookItem;
