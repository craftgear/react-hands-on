import { ChangeEvent } from 'react';

import { useGetTodos, usePatchTodo } from '../api/todos';

export const Todos = () => {
  const { data, isPending, error } = useGetTodos();
  const { mutate } = usePatchTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    mutate({ id: Number(id), done: true });
  };

  if (isPending) {
    return <div>Loading... </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      {data?.map(({ id, title, done }) => (
        <div key={id}>
          <input
            type="checkbox"
            id={`${id}`}
            value={id}
            defaultChecked={done}
            onChange={handleChange}
          />
          <label htmlFor={`${id}`}>{title}</label>
        </div>
      ))}
    </div>
  );
};
