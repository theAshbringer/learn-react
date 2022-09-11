const getPagesCount = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

export default getPagesCount;
