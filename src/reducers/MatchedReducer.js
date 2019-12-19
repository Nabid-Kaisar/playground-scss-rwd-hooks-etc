import {
  MAKE_MATCHED_TRUE,
  DEFINE_INITIAL_MATCHED_ARR
} from "../actions/ActionsTypes";

import { extractImgName } from "../util/utilFn";

const INITIAL_DATA = {};

const MathcedReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case MAKE_MATCHED_TRUE:
      //reduce
      return state;

    case DEFINE_INITIAL_MATCHED_ARR:
      //make arr of all false. length found from action obj
      console.log(action);
      let newObj = {};
      for (let i = 0; i < action.imgArr.length; i++) {
        Object.assign(state, { [extractImgName(action.imgArr[i])]: false });
      }

      console.log(newObj);
      return newObj;

    default:
      return state;
  }
};

export default MathcedReducer;
