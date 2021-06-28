import create from 'zustand';
import { addItem, removeItem, setItems } from './actions';
import { immer } from './middlewares';
import { BaseItem, Store } from './types';

export const createStore = <T extends BaseItem,>() => create<Store<T>>(
  immer((set) => ({
    state: {items: []},
    actions: {
      add: (item) => set(addItem(item)),
      remove: (item) => set(removeItem(item)),
      setItems: (items) => set(setItems(items))
    }
  }))
);

