import { create } from "zustand";
import { CartItem } from "../../utils/types";

interface CartState {
  cartItems: CartItem[];

  totalPrice: number;
  totalQuantity: number;

  addToCart: (item: CartItem) => void;
  addPrice: (item: CartItem) => void;
  addProductQuantity: (item: CartItem) => void;

  subProductQuantity: (item: CartItem) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,

  addToCart: (item: CartItem) =>
    set((state) => {
      const { cartItems } = state;
      const checkItem = cartItems.find((cartItem) => cartItem._id === item._id);
      if (checkItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem._id === checkItem._id) {
            cartItem.quantity += item.quantity;
          }
          return cartItem;
        });
        return {
          cartItems: updatedCartItems,
          totalQuantity: state.totalQuantity + item.quantity,
          totalPrice: state.totalPrice + item.quantity * item.price,
        };
      }

      return {
        cartItems: [...state.cartItems, item],
        totalQuantity: state.totalQuantity + item.quantity,
        totalPrice: state.totalPrice + item.quantity * item.price,
      };
    }),
  addPrice: (item: CartItem) =>
    set((state) => ({ totalPrice: state.totalPrice + item.price })),
  addProductQuantity: (item: CartItem) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      return {
        cartItems: updatedCartItems,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + item.price,
      };
    }),

  subProductQuantity: (item: CartItem) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          cartItem.quantity -= 1;
        }
        return cartItem;
      });
      return {
        cartItems: updatedCartItems,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - item.price,
      };
    }),
}));
