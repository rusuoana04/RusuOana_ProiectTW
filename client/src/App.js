import React from 'react';
import './App.css';
import AuthorsList from './components/AuthorsList';
import AddAuthor from './components/AddAuthor';
import BooksList from './components/BooksList';
import AddBook from './components/AddBook';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Manager Bibliografii" />
        <h1>Manager Bibliografii</h1>
      </header>
      <main>
        <section>
          <h2>Adăugare Autor</h2>
          <AddAuthor />
          <h2>Lista Autori</h2>
          <AuthorsList />
        </section>
        <section>
          <h2>Adăugare Carte</h2>
          <AddBook />
          <h2>Lista Cărți</h2>
          <BooksList />
        </section>
      </main>
    </div>
  );
}

export default App;
