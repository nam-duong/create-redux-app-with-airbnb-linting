import {
  CHANGE_TITLE,
} from '../../actions/action-types';

import * as appReducers from './app-reducer-utils';

const initState = {
  title: 'Welcome to React',
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return appReducers.changeTitle(state);
    default:
      return state;
  }
};
