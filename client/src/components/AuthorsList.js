import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditAuthor from './EditAuthor';

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const [editAuthor, setEditAuthor] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/authors/${id}`)
      .then(() => {
        setAuthors(authors.filter(author => author.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the author!', error);
      });
  };

  const handleEdit = (author) => {
    setEditAuthor(author);
  };

  return (
    <div>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.fullname}
            <button onClick={() => handleEdit(author)}>Edit</button>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editAuthor && <EditAuthor author={editAuthor} setEditAuthor={setEditAuthor} />}
    </div>
  );
};

export default AuthorsList;
