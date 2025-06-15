import { useCounter } from "../state/counter";

export const CounterWithStore = () => {
  const [count, setCount] = useCounter();

  return (
    <div className="card">
      <button
        className="btn btn-outline btn-primary text-2xl"
        onClick={() => {
          setCount();
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
