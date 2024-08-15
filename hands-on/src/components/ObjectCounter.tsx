import { useState } from 'react';

export const ObjectCounter = () => {
  const [state, setState] = useState({ count: 0 });

  return (
    <div className="card">
      <button
        className="btn btn-primary text-xl"
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        count is {state.count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
