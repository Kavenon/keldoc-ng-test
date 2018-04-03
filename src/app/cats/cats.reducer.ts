import {CatsState} from './cats.state';

const defaultCatsState: CatsState = {
  cats: [],
};

// Note: action has type "any" just for 2h task limitation
export function CatsReducer(state = defaultCatsState, action: any) {

  switch (action.type) {
    default:
      return state;
  }

}
