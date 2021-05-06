export const splitQueriedList = (list) => list.split(";");

export const getImage = (imagesArr, imageTitle) =>
  imagesArr.find(({ title }) => title === imageTitle);

export const getFormatedDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};
