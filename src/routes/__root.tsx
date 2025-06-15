import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>

      <div className="navbar flex w-full justify-around">
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>

        <Link className="btn btn-ghost" to="/todos">
          Todos
        </Link>
      </div>

      <Outlet />
    </React.Fragment>
  );
}
