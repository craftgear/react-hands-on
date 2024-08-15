import { useCounter } from '../state/counterAtom';

export const CounterWithAtom = () => {
  const [count, setCount] = useCounter();

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <button className="btn btn-primary text-xl" onClick={handleClick}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
