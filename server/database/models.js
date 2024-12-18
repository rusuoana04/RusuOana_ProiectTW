
const sequelize = require('../database/sequelize');
const { DataTypes } = require('sequelize');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'You need to select a valid date' },
    }
  }
});


const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Book must have a name!' },
      notEmpty: { msg: 'Name must not be empty!' },
    }
  },
  content: {
    type: DataTypes.TEXT
  }
});


Author.hasMany(Book, {
  foreignKey: {
    allowNull: false,
    name: 'authorId', 
  },
});
Book.belongsTo(Author, {
  foreignKey: 'authorId',
});

module.exports = { Author, Book };
