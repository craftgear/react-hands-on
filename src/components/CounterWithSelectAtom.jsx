import { memo, useMemo, useCallback, useRef, useEffect } from 'react';
import { useCount } from '../state/counterAtom';

export const Note = memo(({ now }) => (
  <p className="p-1 text-3xl">Current time is {now}</p>
));

export const CounterWithSelectAtom = ({ children }) => {
  // const [state, setState] = useAppState();
  const [count, setCount] = useCount();

  const now = useMemo(() => {
    return Date.now();
  }, []);

  const handleClick = useCallback(() => setCount(), []);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="card">
      <input type="text" />
      <button className="btn btn-secondary" onClick={handleClick} ref={ref}>
        count is {count}
      </button>
      <Note now={now} handleClick={handleClick} />
      {children}
    </div>
  );
};
