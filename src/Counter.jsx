import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Note } from "./Note";

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  const memoNow = useMemo(() => {
    return Date.now();
  }, [random]);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1); // setCount(2 + 1)
  }, []);

  const ref = useRef();

  useEffect(() => {
    console.log("effect");
    ref.current?.scrollIntoView({ behavior: "smooth" });
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div className="card">
      <input type="text" className="input input-bordered" ref={ref} />
      <button className="btn btn-primary" onClick={handleClick}>
        count is {count}
      </button>
      <button type="button" onClick={() => setRandom(Math.random())}>
        set random
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <Note now={memoNow} handleClick={handleClick} />
    </div>
  );
};
