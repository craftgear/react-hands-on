import './App.css';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Switch, Route, Link } from 'wouter';
import { Index } from './pages/Index';
import { Todos } from './pages/Todos';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

export default App;
