import { create } from "zustand";
import { TempleStore } from "../types";

export const useTempleStore = create<TempleStore>((set) => ({
    // Initial state
    target: null,

    // Actions
    setTarget: (target) => set({ target }),
}));
