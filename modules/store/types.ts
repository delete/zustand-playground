export type BaseItem = {
  id: number
 }

type Actions<T> = {
  add: (item: T) => void
  remove: (item: T) => void
  setItems: (items: T[]) => void
}

type State<T> = {
  items: T[];
}

export type Store<T extends BaseItem> = {
  state: State<T> 
  actions: Actions<T>
}