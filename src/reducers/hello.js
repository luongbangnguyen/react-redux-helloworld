/**
 * Created by nlbang on 6/14/2017.
 */
import { DISPLAY_HELLO } from '../actions/helloAction';

const hello = (state = 'hello word', action) => {
  switch (action.type) {
      case DISPLAY_HELLO:
        return 'hello ' + action.text;
      default:
        return state;
  }
};
export default hello