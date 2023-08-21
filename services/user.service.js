
const Example = require('../models/exampleModel');

exports.getAllExamples = async () => {
  try {
    const examples = await Example.find();
    return examples;
  } catch (error) {
    throw new Error('Error fetching examples');
  }
};
