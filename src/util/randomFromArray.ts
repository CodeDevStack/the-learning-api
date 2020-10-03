export const randomFromArray = (list: Array<any>): any => {
  if (!Array.isArray(list)) return;
  return list[Math.floor(Math.random() * list.length)];
};
