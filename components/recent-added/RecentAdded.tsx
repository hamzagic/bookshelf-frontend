import styles from "./RecentAdded.module.css";

const RecentAdded = () => {
  const books = [
    {
      id: 3,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      pages: 450,
    },
  ];
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div key={book.id} className={styles.item}>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.pages} pages</div>
        </div>
      ))}
    </div>
  );
};

export default RecentAdded;
