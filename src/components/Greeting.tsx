import type { PropsWithChildren } from "react";
import { useMessage } from "../state/counter.ts";

type Props = {
  names: string[];
};

export const Greeting = ({ names, children }: PropsWithChildren<Props>) => {
  const message = useMessage();
  return (
    <>
      {names.map((name) => {
        return <h1 key={name}>こんにちは {name}</h1>;
      })}
      <div className="text-primary text-3xl">{message}</div>
      {children}
    </>
  );
};
