import { ViteIcon } from '../components/ViteIcon';
import { ReactIcon } from '../components/ReactIcon';
import { Greeting } from '../components/Greeting';
import { Counter, Note } from '../components/Counter';
// import { ObjectCounter } from '../components/ObjectCounter';
// import { CounterWithReducer } from '../components/CounterWithReducer';

export const Index = () => {
  return (
    <>
      <div className="p-5 flex justify-around">
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={['React', 'Vite']}>
        <p>さよならjQuery</p>
      </Greeting>
      <Counter>
        <Note />
      </Counter>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
