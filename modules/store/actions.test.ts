import { Item } from '../List'
import { addItem, removeItem, setItems } from './actions'
import { Store } from './types'

const createStore = (): Store<Item> =>  ({ 
  state: {
    items: []
  },
  actions: {
    add: addItem,
    remove: removeItem,
    setItems: setItems,
  }
})

describe('store functions', () => {
  describe('when add function is called', () => {
    it('should add the item to the list', () => {
      const store = createStore()

      addItem<Item>({title: 'Item 1'})(store)

      expect(store.state.items.length).toBe(1)
    })
  })


  describe('when remove function is called', () => {
    
    it('should remove the item from the list', () => {
      const store = createStore()
      addItem<Item>({title: 'Item 1'})(store)
    
      expect(store.state.items.length).toBe(1)
      
      const item = store.state.items[0]

      removeItem<Item>(item)(store)

      expect(store.state.items.length).toBe(0)
    })
  })
})