import { useForm, type SubmitHandler } from "react-hook-form";
import { usePostTodo } from "../api/todos";

type FormData = {
  title: string;
};

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const { mutate } = usePostTodo();

  const submitForm: SubmitHandler<FormData> = (data) => {
    if (!data.title) return;
    mutate({ title: data.title }, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="m-5">
      {errors.title && <p>タイトルを入力してください</p>}
      <input
        type="text"
        {...register("title", { required: "true" })}
        className="border-primary mr-2 border"
      />
      <button className="btn btn-primary btn-sm">追加</button>
    </form>
  );
};
