import { useState } from 'react';

export const ObjectCounter = () => {
  const [obj, setObj] = useState({ value: 0 });

  return (
    <div className="card">
      <button
        className="btn btn-secondary"
        onClick={() =>
          setObj({
            ...obj,
            value: obj.value + 1,
          })
        }
      >
        count is {obj.value}
      </button>
    </div>
  );
};
