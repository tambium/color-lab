export const getRandomItem = (iterable: Map<any, any>) => {
  const element = Math.floor(Math.random() * iterable.size);
  return [...iterable.keys()][element];
};
