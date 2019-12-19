export const extractImgName = str => {
  return str
    .split("\\")
    .pop()
    .split("/")
    .pop()
    .split("_")[0];
};
