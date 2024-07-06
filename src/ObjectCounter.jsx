import { useState } from "react";

export const ObjectCounter = () => {
  const [obj, setObj] = useState({ count: 0 });

  return (
    <div className="card">
      <button
        className="btn btn-primary"
        onClick={() => {
          setObj({
            ...obj,
            count: obj.count + 1,
          });
        }}
      >
        count is {obj.count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};
