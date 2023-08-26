import { create } from "zustand";

export interface Item {
  price: number;
  title: string;
  quantity: number;
}

interface CartState {
  totalItems: Item[];
  totalPrice: number;
  totalQuantity: number;
  addItem: (item: Item) => void;
  addPrice: (item: Item) => void;
  addQuantity: (item: Item) => void;
}

export const useCartStore = create<CartState>((set) => ({
  totalItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  addItem: (item: Item) =>
    set((state) => ({ totalItems: [...state.totalItems, item] })),
  addPrice: (item: Item) =>
    set((state) => ({ totalPrice: state.totalPrice + item.price })),
  addQuantity: (item: Item) =>
    set((state) => ({ totalQuantity: state.totalQuantity + item.quantity })),
}));
