const getVocalCheck = (word) => {
  const vocal = ["a", "e", "i", "o", "u"];
  return vocal.every((vocal) => word.includes(vocal));
};
export default getVocalCheck;
