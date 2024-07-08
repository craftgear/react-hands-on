import { useState } from 'react';

export const ObjectCounter = () => {
  const [count, setCount] = useState({ value: 0 });

  return (
    <div className="card">
      <button
        className="btn btn-secondary"
        onClick={() =>
          setCount({
            ...count,
            value: count.value + 1,
          })
        }
      >
        count is {count.value}
      </button>
    </div>
  );
};
