# Documentație Proiect: Manager Bibliografii

## Obiectivul Proiectului
Realizarea unei aplicații web pentru gestionarea bibliografiilor, care include funcționalități de adăugare, editare și ștergere a autorilor și cărților, integrată cu un backend RESTful și un frontend SPA realizat cu React.js.

## Tehnologii Utilizate
- **Backend**: Node.js, Express.js, Sequelize ORM, SQLite
- **Frontend**: React.js
- **Alte Biblioteci**: Axios pentru interacțiunea cu API-ul, React Router pentru navigare

## Structura Proiectului
Proiectul este împărțit în două componente principale: backend și frontend.

### Backend
1. **Server.js**: Configurarea serverului Express, configurarea rutelor pentru autori și cărți.
2. **Routes**:
   - `authorsRoutes.js`: Gestionarea rutelor pentru operațiile CRUD asupra autorilor.
   - `booksRoutes.js`: Gestionarea rutelor pentru operațiile CRUD asupra cărților.
3. **Models**:
   - `Author.js`: Definirea modelului pentru autor.
   - `Book.js`: Definirea modelului pentru carte și relația cu autorii.

### Frontend
1. **Componente**:
   - `App.js`: Componenta principală care încarcă toate celelalte componente.
   - `AuthorsList.js`: Afișează lista de autori și permite editarea și ștergerea acestora.
   - `AddAuthor.js`: Formular pentru adăugarea unui autor nou.
   - `BooksList.js`: Afișează lista de cărți și permite editarea și ștergerea acestora.
   - `AddBook.js`: Formular pentru adăugarea unei cărți noi.
   - `EditBook.js`: Formular pentru editarea unei cărți existente.

## Configurare și Rulare

### 1. Instalarea Dependențelor
Pentru a instala toate dependențele necesare pentru backend și frontend, folosește următoarele comenzi:
# Instalare dependențe backend
cd server
npm install

# Instalare dependențe frontend
cd client
npm install

2. Rulare Backend
Pentru a porni serverul backend:
cd server 
node server.js
Serverul va rula pe portul 3000.

3. Rulare Frontend
Pentru a porni aplicația frontend:
cd client
 npm start

 Aplicația React va fi disponibilă la http://localhost:3001.

 Funcționalități
Autori
Adăugare Autor: Folosește formularul din AddAuthor.js.

Listare Autori: Lista este afișată în AuthorsList.js.

Editare Autor: Poți edita un autor din lista de autori.

Ștergere Autor: Poți șterge un autor din lista de autori.

Cărți
Adăugare Carte: Folosește formularul din AddBook.js.

Listare Cărți: Lista este afișată în BooksList.js.

Editare Carte: Poți edita o carte din lista de cărți.

Ștergere Carte: Poți șterge o carte din lista de cărți.

Decizii de Design
Sequelize ORM: Folosit pentru a simplifica interacțiunea cu baza de date SQLite.

React.js: Alegerea framework-ului pentru frontend datorită componentelor bazate pe stări și ușurinței de utilizare.

Axios: Folosit pentru a efectua cereri HTTP către backend.

Exemple de Cereri CURL pentru Testare
Adăugare Carte
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"name":"Cartea 1","authorId":"<UUID-AuthorID>"}'

curl -X PUT http://localhost:3000/books/<BookID> -H "Content-Type: application/json" -d '{"name":"Cartea Editată","authorId":"<UUID-AuthorID>"}'
curl -X DELETE http://localhost:3000/books/<BookID>
