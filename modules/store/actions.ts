import { BaseItem, Store } from "./types"

export const addItem = <T extends BaseItem,>(item: T) => (({ state }: Store<T>) => {
  state.items.push({...item, id: Math.floor(Math.random() * (100 - 1 + 1)) + 1})
})

export const removeItem = <T extends BaseItem,>(item: T) => (({ state }: Store<T>) => {
  state.items = state.items.filter(i => i.id !== item.id)
})

export const setItems = <T extends BaseItem,>(items: T[]) => (({ state }: Store<T>) => {
  state.items = items
})