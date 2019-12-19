import {
  MAKE_MATCHED_TRUE,
  DEFINE_INITIAL_MATCHED_ARR,
  ADD_TO_CURRENT_BUFFER
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
      let newObj = {};
      for (let i = 0; i < action.imgArr.length; i++) {
        Object.assign(newObj, { [extractImgName(action.imgArr[i])]: false });
      }
      newObj.currentBuffer = [];

      return newObj;

    case ADD_TO_CURRENT_BUFFER:
      // console.log(state);
      // console.log(action);
      let currentBuffer = [...state.currentBuffer];
      currentBuffer.push(action.imgName, action.sameImgCount);
      console.log(currentBuffer);
      if (currentBuffer.length === 2) {
        return { ...state, currentBuffer };
      } else {
        //first check is for image name
        //second check is for img uniqueness check
        if (
          currentBuffer[0] === currentBuffer[2] &&
          currentBuffer[1] !== currentBuffer[3]
        ) {
          //update hero match = true
          //flush currentBuffer
          return { ...state, [action.imgName]: true, currentBuffer: [] };
        } else {
          //flush currentBuffer
          return { ...state, currentBuffer: [] };
        }
      }

    default:
      return state;
  }
};

export default MathcedReducer;
