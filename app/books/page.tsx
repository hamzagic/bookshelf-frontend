import React from 'react';

import BookItem from '@/components/book-item/BookItem';
import books from '../../assets/data/books';
import styles from './page.module.css';

const BooksPage: React.FC = () => {
  return (
    <>
    <h1 className={styles.h1}>Books</h1>
    <div className={styles.container}>
      {books.map(book => <BookItem book={book} key={book.id}/>)}
    </div>
    </>
  );
}

export default BooksPage;