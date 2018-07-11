import { Actions } from 'react-native-router-flux';
import {
  NAME_CHANGED,
  COURSE_CHANGED,
} from './types';

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const courseChanged = (text) => {
  return {
    type: COURSE_CHANGED,
    payload: text
  };
};
