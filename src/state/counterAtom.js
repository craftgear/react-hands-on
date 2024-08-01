import { atom, useAtom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';

// number
export const counterAtom = atom(0);
export const useCounter = () => useAtom(counterAtom);

// object
const appStateAtom = atom({ count: 0, message: '10未満' });
export const useAppState = () => useAtom(appStateAtom);

const messageAtom = selectAtom(appStateAtom, (state) => state.message);
export const useMessage = () => useAtomValue(messageAtom);

export const useCount = () => {
  const [{ count }, setState] = useAtom(appStateAtom);

  const set = () =>
    setState((prev) => ({
      count: prev.count + 1,
      message: prev.count + 1 < 10 ? '10未満' : '10以上',
    }));

  return [count, set];
};
