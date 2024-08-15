import { PropsWithChildren } from 'react';
import { useMessage } from '../state/counterAtom';

type Props = {
  names: string[];
};

export const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  const message = useMessage();

  return (
<<<<<<< HEAD:src/components/Greeting.tsx
    <div>
      {names.map((name) => {
        return (
          <h1 key={name} className="text-3xl">
            こんにちは {name}
          </h1>
        );
      })}
      {children}
      <h2 className="text-2xl">{message}</h2>
    </div>
=======
    <>
      {names.map((name) => (
        <h1 key={name}>こんにちは {name}</h1>
      ))}
      {children}
      <p>{message}</p>
    </>
>>>>>>> typescript:hands-on/src/components/Greeting.tsx
  );
};
