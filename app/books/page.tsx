import React from 'react';

import Header from '@/components/header/Header';
import BookItem from '@/components/book-item/BookItem';
import books from '../../assets/data/books';
import styles from './page.module.css';

const BooksPage: React.FC = () => {
  return (
    <>
    <Header pageName='My Books' />
    <div className={styles.container}>
      {books.map(book => <BookItem book={book} key={book.id}/>)}
    </div>
    </>
  );
}

export default BooksPage;