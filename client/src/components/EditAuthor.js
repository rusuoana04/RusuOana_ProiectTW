import React, { useState } from 'react';
import axios from 'axios';

const EditAuthor = ({ author, setEditAuthor }) => {
  const [fullname, setFullname] = useState(author.fullname);
  const [birthdate, setBirthdate] = useState(author.birthdate);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/authors/${author.id}`, { fullname, birthdate })
      .then(response => {
        console.log('Author updated:', response.data);
        setEditAuthor(null); 
      })
      .catch(error => {
        console.error('There was an error updating the author!', error);
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
      <button type="submit">Update Author</button>
      <button type="button" onClick={() => setEditAuthor(null)}>Cancel</button>
    </form>
  );
};

export default EditAuthor;
