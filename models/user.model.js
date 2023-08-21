
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: String,
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
