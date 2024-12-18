import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [name, setName] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/authors')
      .then(response => {
        setAuthors(response.data);
        console.log('Authors fetched:', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting:', { name, authorId });
    if (!name || !authorId) {
      console.error('Name or Author is missing');
      return;
    }
    axios.post('http://localhost:3000/books', { name, authorId })
      .then(response => {
        console.log('Book added:', response.data);
        setName(''); 
        setAuthorId('');
      })
      .catch(error => {
        console.error('There was an error adding the book!', error);
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
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
