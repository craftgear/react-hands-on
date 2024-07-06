import "./App.css";
import { ViteIcon } from "./ViteIcon";
import { ReactIcon } from "./ReactIcon";
import { Greeting } from "./Greeting";
import { Counter } from "./Counter";
import { Note } from "./Note";

function App() {
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
}

export default App;
