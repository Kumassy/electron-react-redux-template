import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions/counter';

const initialState = {
  count: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      const { count } = state;

      return {
        ...state,
        count: count + 1
      }
    }

    case DECREMENT_COUNTER: {
      const { count } = state;

      return {
        ...state,
        count: count - 1
      }
    }

    default:
      return state;
  }
}
