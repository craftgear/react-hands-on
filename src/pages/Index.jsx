import { ViteIcon } from "../components/ViteIcon";
import { ReactIcon } from "../components/ReactIcon";
import { Greeting } from "../components/Greeting";
import { Counter } from "../components/CounterWithAtom";
import { Note } from "../components/Note";

export const Index = () => {
  return (
    <>
      <ViteIcon />
      <ReactIcon />
      <h1>Vite + React</h1>
      <Greeting names={["React", "Vite"]}>
        <p>さよなら jQuery</p>
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
