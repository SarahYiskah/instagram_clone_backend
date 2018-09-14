import mongoose from 'mongoose';
import User from './models/user';

const users = [ {},{}
]

mongoose.connect('mongodb://localhost/movies');
// Go through each movie
users.map(data => {
  // Initialize a model with movie data
  const user = new User(data);
  // and save it into the database
  user.save();
});


// node_modules/babel-cli/bin/babel-node.js populate.js
