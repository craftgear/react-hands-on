import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ViteIcon } from "../components/ViteIcon";
import { ReactIcon } from "../components/ReactIcon";
import { Greeting } from "../components/Greeting";
import { Counter } from "../components/Counter";
import { CounterWithStore } from "../components/CounterWithStore";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ViteIcon />
        <ReactIcon />
      </div>
      <h1>Vite + React</h1>
      <Greeting names={["React", "Vite"]}>
        <p>paragraph</p>
      </Greeting>
      <div className="card">
        <button
          className="btn btn-outline btn-primary w-1/2 text-2xl"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <CounterWithStore />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
