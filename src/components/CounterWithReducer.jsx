import { useReducer } from 'react';

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case incrementAction.type: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case incrementByNAction.type: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }
    default:
      return state;
  }
};

const incrementAction = {
  type: 'increment',
};

const incrementByNAction = {
  type: 'incrementByN',
  payload: 1,
};

const createIncrementByNAction = (n) => ({
  ...incrementByNAction,
  payload: n,
});

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(createIncrementByNAction(3))}
      >
        count is {state.value}
      </button>
    </div>
  );
};
