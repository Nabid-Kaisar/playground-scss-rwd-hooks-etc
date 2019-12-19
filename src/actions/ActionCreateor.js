import { DEFINE_INITIAL_MATCHED_ARR, MAKE_MATCHED_TRUE } from "./ActionsTypes";

export const defineInitialArr = imgArr => ({
  type: DEFINE_INITIAL_MATCHED_ARR,
  imgArr
});

export const makeMatchedTrue = index => ({
  type: MAKE_MATCHED_TRUE,
  index
});
