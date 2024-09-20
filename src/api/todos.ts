import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const queryKey = ['todos'];

const get = async () => {
  const response = await fetch('http://localhost:3000/todos');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const useGetTodos = () =>
  useQuery<Todo[]>({
    queryKey,
    queryFn: get,
  });

const patch = async (data: { id: number; done: boolean }) => {
  const response = await fetch(`http://localhost:3000/todos/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const usePatchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });
};

const post = async (data: { title: string }) => {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });
};
