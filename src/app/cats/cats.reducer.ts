import {CatsState} from './cats.state';
import {GET_CATS_SUCCESS} from './cats.actions';

const defaultCatsState: CatsState = {
  cats: [],
};

// Note: action has type "any" just for 2h task limitation
export function CatsReducer(state = defaultCatsState, action: any) {

  switch (action.type) {
    case GET_CATS_SUCCESS:
      return {cats: action.payload};
    default:
      return state;
  }

}
