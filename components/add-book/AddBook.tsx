import styles from "./AddBook.module.css";

const AddBook = () => {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h3 className={styles.title}>Add New Book</h3>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.label}>
              Book Name
            </label>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter the book name"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.label}>
              Author
            </label>
            <input
              type="text"
              name="author"
              className={styles.input}
              placeholder="Enter the author name"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.label}>
              Number of Pages
            </label>
            <input
              type="number"
              name="pages"
              className={styles.input}
              placeholder="Enter the number of pages"
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.label}>
              Date
            </label>
            <input type="date" name="date" className={styles.input} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.label}>
              Time
            </label>
            <input type="time" name="time" className={styles.input} />
          </div>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
