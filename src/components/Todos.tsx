import { ChangeEvent } from "react";
import { useGetTodos, usePatchTodo } from "../api/todos";
import { TodoForm } from "./TodoForm";

export const Todos = () => {
  const { data, isPending, error } = useGetTodos();

  const { mutate } = usePatchTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;

    mutate({ id, done: e.target.checked });
  };

  if (isPending) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log("----- data", data);

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">Todo List</h1>

      <TodoForm />
      <ul className="space-y-3">
        {data?.map(({ id, title, done }) => (
          <li
            key={id}
            className="bg-neutral flex items-center rounded-lg p-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <input
              type="checkbox"
              id={`${id}`}
              value={id}
              checked={done ? true : false}
              onChange={handleChange}
              className="mr-4 h-5 w-5 cursor-pointer"
            />

            <label
              htmlFor={`${id}`}
              className={`flex-1 text-lg ${done ? "󰝤 text-gray-400 line-through" : "󰝤 text-gray-50"}`}
            >
              {title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
