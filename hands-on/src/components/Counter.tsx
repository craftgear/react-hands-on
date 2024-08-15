import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Note } from './Note';

export const Counter = () => {
  const [count, setCount] = useState(0);

  // const now = Date.now();
  const memoizedNow = useMemo(() => Date.now(), []);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log('effect');
    ref.current?.focus();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="card">
      <button
        ref={ref}
        className="btn btn-primary text-xl"
        onClick={handleClick}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <Note now={memoizedNow} handleClick={handleClick} />
    </div>
  );
};
