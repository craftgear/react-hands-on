import { ReactIcon } from '../components/ReactIcon';
import { ViteIcon } from '../components/ViteIcon';
import { Greeting } from '../components/Greeting';
import { Counter } from '../components/Counter';

export const Index = () => {
  return (
    <>
      <div>
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={['React', 'Vite']} />
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
