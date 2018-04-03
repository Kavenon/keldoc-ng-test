import {CatsState} from './cats.state';
import {ADD_CAT_SUCCESS, GET_CATS_SUCCESS, REMOVE_CAT_SUCCESS} from './cats.actions';
import {Cat} from './cat.model';

const defaultCatsState: CatsState = {
  cats: [],
};

// Note: action has type "any" just for 2h task limitation
export function CatsReducer(state = defaultCatsState, action: any) {

  switch (action.type) {
    case GET_CATS_SUCCESS:
      return {cats: action.payload};
    case ADD_CAT_SUCCESS:
      return {cats: [...state.cats, action.payload]};
    case REMOVE_CAT_SUCCESS:
      return {cats: state.cats.filter((cat: Cat) => cat.id !== action.payload)};
    default:
      return state;
  }

}
