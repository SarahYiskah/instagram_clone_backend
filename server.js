import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Initialize http server
const app = express();

app.use(bodyParser.json())

// Handle / route
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

mongoose.connect('mongodb://localhost/instaclone')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
