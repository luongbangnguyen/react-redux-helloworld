/**
 * Created by nlbang on 6/21/2017.
 */
import { RECEIVE_DATA } from '../actions/apiAction';

const data = (state = [], action) => {
  switch (action.type) {
      case RECEIVE_DATA:
          return action.values;
      default:
          return state;
  }
};

export default data;