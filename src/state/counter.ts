import { Store, useStore } from "@tanstack/react-store";

export const counterStore = new Store({
  counter: 0,
  message: "10未満",
});

const setCounter = () => {
  counterStore.setState((store) => {
    return {
      ...store,
      counter: store.counter + 1,
      message: store.counter + 1 >= 10 ? "10以上" : store.message,
    };
  });
};

export const useCounter = (): [number, typeof setCounter] => [
  useStore(counterStore, (store) => store["counter"]),
  setCounter,
];

export const useMessage = (): string =>
  useStore(counterStore, (store) => store["message"]);
