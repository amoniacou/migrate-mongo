const numberPattern = /\d+/g;

const now = (dateString = Date.now()) => {
  const date = new Date(dateString);
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
};

// UTC time
const nowAsString = () => now().toISOString().split('.')[0].match(numberPattern).join('')

module.exports = {
  now,
  nowAsString
};
