import {
  MAKE_MATCHED_TRUE,
  DEFINE_INITIAL_MATCHED_ARR
} from "../actions/ActionsTypes";

const INITIAL_DATA = [];

const MathcedReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case MAKE_MATCHED_TRUE:
    //reduce
    break;
    case DEFINE_INITIAL_MATCHED_ARR:
    //make arr of all false. length found from action obj
    break;
    default:
      return state;
  }
};

export default MathcedReducer;
