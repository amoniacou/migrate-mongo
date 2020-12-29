const numberPattern = /\d+/g;

const now = (dateString = Date.now()) => {
  return new Date(dateString);
};

// UTC time
const nowAsString = () =>
  now().toISOString().split('.')[0].match(numberPattern).join('');

module.exports = {
  now,
  nowAsString,
};
