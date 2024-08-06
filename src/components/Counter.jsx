import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Note } from './Note';

export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const now = useMemo(() => {
    return Date.now();
  }, []);

  const handleClick = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

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
