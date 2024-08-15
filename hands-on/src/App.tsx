import './App.css';
import { Switch, Route, Link } from 'wouter';
import { Index } from './pages/Index';
import { Todos } from './pages/Todos';

function App() {
  return (
    <>
      <div className="navbar flex justify-around w-full">
        <Link className="btn btn-ghost" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/todos">
          Todos
        </Link>
      </div>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </>
  );
}

export default App;
