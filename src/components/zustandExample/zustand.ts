import { create } from "zustand";

type ZustandState = {
  beers: number;
  addBeer: () => void;
  removeBeer: () => void;
  resetBeer: () => void;
};
export const useZustandStore = create<ZustandState>((set) => ({
  beers: 0,
  addBeer: () => set((state) => ({ beers: state.beers + 1 })),
  removeBeer: () =>
    set((state) => ({ beers: state.beers - 1 > 0 ? state.beers - 1 : 0 })),
  resetBeer: () => set({ beers: 0 }),
}));
