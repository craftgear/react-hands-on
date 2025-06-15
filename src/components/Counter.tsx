import { useState, useRef, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  console.log(ref.current);

  useEffect(() => {
    console.log("useEffect called");
    if (ref.current) {
      // ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      console.log("useEffect cleanup called");
    };
  }, []);

  return (
    <div className="card">
      <button
        ref={ref}
        className="btn btn-outline btn-primary text-2xl"
        onClick={() => {
          setCount(count + 1); // 0 + 1 = 1
          setCount((prevValue) => {
            return prevValue + 1; // 1 + 1 = 2
          });
        }}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
