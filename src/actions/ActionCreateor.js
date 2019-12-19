import {
  DEFINE_INITIAL_MATCHED_ARR,
  MAKE_MATCHED_TRUE,
  ADD_TO_CURRENT_BUFFER
} from "./ActionsTypes";

export const defineInitialArr = imgArr => ({
  type: DEFINE_INITIAL_MATCHED_ARR,
  imgArr
});

export const makeMatchedTrue = index => ({
  type: MAKE_MATCHED_TRUE,
  index
});

export const addToCurrentBuffer = (imgName, sameImgCount) => ({
  type: ADD_TO_CURRENT_BUFFER,
  imgName,
  sameImgCount
});
