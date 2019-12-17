import { DEFINE_INITIAL_MATCHED_ARR, MAKE_MATCHED_TRUE } from "./ActionsTypes";

export const defineInitialArr = arrLength => ({
  type: DEFINE_INITIAL_MATCHED_ARR,
  arrLength
});


export const MAKE_MATCHED_TRUE = index => ({
    type: MAKE_MATCHED_TRUE,
    index
})