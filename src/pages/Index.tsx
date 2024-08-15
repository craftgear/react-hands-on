import { ViteIcon } from '../components/ViteIcon';
import { ReactIcon } from '../components/ReactIcon';
import { Greeting } from '../components/Greeting';
// import { Counter } from '../components/Counter';
// import { ObjectCounter } from '../components/ObjectCounter';
// import {CounerWithReducer} from '../components/CounterWithReducer';
// import { CounterWithAtom } from '../components/CounterWithSelectAtom';
import { CounterWithSelectAtom } from '../components/CounterWithSelectAtom';

export const Index = () => {
  return (
    <>
      <div className="p-5 flex justify-around">
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={['React', 'Vite']}>
        <p>React is a JavaScript library for building user interfaces.</p>
      </Greeting>
      <CounterWithSelectAtom />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
