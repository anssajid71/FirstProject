// index.js
const express = require('express');
const app = express();

app.use(express.json());

// Load routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
