import { ChangeEvent } from 'react';
import { useGetTodos, usePatchTodo, usePostTodo } from '../api/todos';
import { TodoForm } from '../components/TodoForm';

export const Todos = () => {
  const { data, isLoading, error } = useGetTodos();

  const { mutate } = usePatchTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    mutate({ id: Number(id), done: true });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p className="text-3xl">Todos</p>
      <TodoForm />
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
