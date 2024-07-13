import { useGetTodos, usePatchTodo } from "../api/todos";
import { TodoForm } from "../components/TodoForm";

export const Todos = () => {
  const { data, isPending, error } = useGetTodos();
  const { mutate } = usePatchTodo();

  const handleChange = (e) => {
    const id = e.target.value;
    mutate({
      id,
      done: true,
    });
  };

  if (isPending) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <TodoForm />
      <ul>
        {data.map(({ title, id, done }) => (
          <li key={id}>
            <input
              id={id}
              type="checkbox"
              value={id}
              defaultChecked={done}
              onChange={handleChange}
            />
            <label htmlFor={id}>{title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
