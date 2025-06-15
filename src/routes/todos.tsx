import { createFileRoute } from "@tanstack/react-router";
import { Todos } from "../components/Todos";

export const Route = createFileRoute("/todos")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Todos></Todos>;
}
