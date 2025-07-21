import { selector } from "recoil";
import { counterAtom } from "./counterAtom";        

export const isEvenSelector = selector({
  key: "isEvenSel",
  get: ({ get }) => {
    const counterValue = get(counterAtom);
    return counterValue % 2 === 0;
  }
});