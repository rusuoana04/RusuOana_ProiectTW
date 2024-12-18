const express = require('express');
const cors = require('cors'); 
const sequelize = require('./database/sequelize');
const authorsRoutes = require('./routes/authorsRoutes');
const booksRoutes = require('./routes/booksRoutes');
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(cors()); 


sequelize.sync()
  .then(() => {
    console.log('Models successfully (re)created');
  })
  .catch((err) => {
    console.error('Error creating models: ', err);
  });


app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
