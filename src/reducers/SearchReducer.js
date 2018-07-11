import {
  NAME_CHANGED,
  COURSE_CHANGED,
} from '../actions/types';

const INITIAL_STATE = { name: '', course: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case COURSE_CHANGED:
      return { ...state, course: action.payload };
    default:
      return state;
  }
};
