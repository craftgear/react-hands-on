import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const SERVER_URL = "http://localhost:3000/todos";
export const get = async () => {
  const response = await fetch(SERVER_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const patch = async (data: { id: string; done: boolean }) => {
  const res = await fetch(`${SERVER_URL}/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

const post = async (data: { title: string }) => {
  const response = await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const queryKey = ["todos"];

export const useGetTodos = () => {
  return useQuery<Todo[]>({
    queryKey,
    queryFn: get,
  });
};

export const usePatchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });
};
