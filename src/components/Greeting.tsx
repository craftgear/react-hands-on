import { PropsWithChildren } from 'react';

type Props = {
  names: string[];
};

export const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h1 key={name} className="text-3xl">
            こんにちは {name}
          </h1>
        );
      })}
      {children}
    </div>
  );
};
