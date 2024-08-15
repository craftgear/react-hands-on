import { useCount } from '../state/counterAtom';

export const CounterWithSelectAtom = () => {
  const [count, increment] = useCount();

  const handleClick = () => increment();

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
