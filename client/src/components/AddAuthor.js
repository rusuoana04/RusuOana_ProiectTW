
import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
  const [fullname, setFullname] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/authors', { fullname, birthdate })
      .then(response => {
        console.log('Author added:', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the author!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthor;
