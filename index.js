function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(date = new Date(), format = "YYYY-MM-DD") {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
}

// Export multiple functions
module.exports = {
  getRandomNumber,
  formatDate,
};
