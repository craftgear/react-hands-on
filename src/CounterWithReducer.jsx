import { useReducer } from "react";

const initialState = {
  count: 0,
  count: 0,
  count: 0,
  count: 0,
  count: 0,
  count: 0,
  count: 0,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case incrementAction.type: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default:
      return state;
  }
};

const incrementAction = {
  type: "increment",
  payload: 1,
};

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card">
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(incrementAction);
        }}
      >
        count is {state.count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};
