
const { getCurrentDate } = require('../helpers/dateHelper');

exports.exampleController = (req, res) => {
  const currentDate = getCurrentDate();
  res.json({ message: 'This is the example controller.', currentDate });
};
