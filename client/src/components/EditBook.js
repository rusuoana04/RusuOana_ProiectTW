import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = ({ book, setEditBook, authors }) => {
  const [name, setName] = useState(book.name);
  const [authorId, setAuthorId] = useState(book.authorId);

  useEffect(() => {
    setName(book.name);
    setAuthorId(book.authorId);
    console.log('Edit form initialized:', { name: book.name, authorId: book.authorId }); 
  }, [book]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting edit:', { name, authorId }); 
    axios.put(`http://localhost:3000/books/${book.id}`, { name, authorId })
      .then(response => {
        console.log('Book updated:', response.data);
        setEditBook(null); 
      })
      .catch(error => {
        console.error('There was an error updating the book!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Author:
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Select Author</option>
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.fullname}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Update Book</button>
      <button type="button" onClick={() => setEditBook(null)}>Cancel</button>
    </form>
  );
};

export default EditBook;
