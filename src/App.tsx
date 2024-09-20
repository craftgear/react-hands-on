import { useState } from 'react';
import './App.css';
import { ReactIcon } from './components/ReactIcon';
import { ViteIcon } from './components/ViteIcon';
import { Greeting } from './components/Greeting';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={['React', 'Vite']} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
