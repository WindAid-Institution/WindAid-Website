export const splitQueriedList = (list) => list.split(";");

export const getImage = (imagesArr, imageTitle) =>
  imagesArr.find(({ title }) => title === imageTitle);
