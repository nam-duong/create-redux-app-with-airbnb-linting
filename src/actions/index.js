/*
  This is where to define all redux actions with type and payload.
*/
import {
  CHANGE_TITLE,
} from './action-types';

export const changeTitleAction = () => (
  {
    type: CHANGE_TITLE,
  }
);
