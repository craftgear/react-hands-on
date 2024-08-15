import { useReducer } from 'react';
import { Note } from './Note';

const initialState = {
  count: 0,
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case incrementAction.type:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

const incrementAction = { type: 'increment', payload: 10 };
type ActionType = typeof incrementAction;

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <button
        className="btn btn-primary text-xl"
        onClick={() => {
          dispatch(incrementAction);
        }}
      >
        count is {state.count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <Note />
    </div>
  );
};
