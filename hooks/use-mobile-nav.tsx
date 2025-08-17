"use client";

import { create } from "zustand";

export const useMobileNav = create<{
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
