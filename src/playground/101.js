import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  console.log('running')
  switch (action.type) {
    case 'INCREMENT': 
      return {
        state: state.count + 1
      }
    case 'DECREMENT':
      return {
        state: state.count - 1
      }
    case 'RESET': {
      return {
        state: state.count = 0
      }
    }
    default: 
      return state;
  }
})

store.dispatch({
    type: "INCREMENT"
})

console.log(store.getState())

store.dispatch({
  type: "DECREMENT"
})

console.log(store.getState())

store.dispatch({
  type: "RESET"
})

console.log(store.getState())
