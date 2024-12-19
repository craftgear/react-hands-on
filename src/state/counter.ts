import { Store, useStore } from "@tanstack/react-store";

const counterStore = new Store({
  count: 0,
  message: "10未満",
});

const setCounter = () => {
  counterStore.setState((store) => {
    return {
      ...store,
      count: store.count + 1,
      message: store.count + 1 >= 10 ? "10以上" : store.message,
    };
  });
};

export const useCounter = (): [number, typeof setCounter] => [
  useStore(counterStore, (store) => store["count"]),
  setCounter,
];

export const useMessage = () =>
  useStore(counterStore, (store) => store["message"]);
