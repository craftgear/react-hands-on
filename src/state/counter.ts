import { Store, useStore } from "@tanstack/react-store";

const counterStore = new Store({
  count: 0,
});

const setCounter = () => {
  counterStore.setState((store) => {
    return {
      ...store,
      count: store.count + 1,
    };
  });
};

export const useCounter = (): [number, typeof setCounter] => [
  useStore(counterStore, (store) => store["count"]),
  setCounter,
];
