import { PropsWithChildren } from 'react';
type Props = {
  names: string[];
};

export const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {names.map((name) => {
        return <h1 key={name}>こんにちは {name}</h1>;
      })}
      {children}
    </>
  );
};
