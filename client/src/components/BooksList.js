import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditBook from './EditBook';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    const fetchBooksAndAuthors = async () => {
      try {
        const booksResponse = await axios.get('http://localhost:3000/books');
        const authorsResponse = await axios.get('http://localhost:3000/authors');
        setBooks(booksResponse.data);
        setAuthors(authorsResponse.data);
        console.log('Books and authors fetched:', booksResponse.data, authorsResponse.data); 
      } catch (error) {
        console.error('There was an error fetching the books and authors!', error);
      }
    };

    fetchBooksAndAuthors();
  }, []);

  const getAuthorName = (authorId) => {
    const author = authors.find(author => author.id === authorId);
    return author ? author.fullname : 'Unknown Author';
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
        console.log('Book deleted:', id);
        setEditBook(null); 
      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);
      });
  };

  const handleEdit = (book) => {
    console.log('Edit button clicked:', book); 
    setEditBook(book);
  };

  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.name} by {getAuthorName(book.authorId)}
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editBook && <EditBook book={editBook} setEditBook={setEditBook} authors={authors} />}
    </div>
  );
};

export default BooksList;
