const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Διαβάζει JSON body

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});