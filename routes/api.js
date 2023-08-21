
const express = require('express');
const router = express.Router();
const { exampleController } = require('../controllers/exampleController');
const { getAllExamples } = require('../services/exampleService');

router.get('/example', exampleController);
router.get('/examples', async (req, res) => {
  try {
    const examples = await getAllExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching examples' });
  }
});

module.exports = router;
