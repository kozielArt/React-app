import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
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

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
    type: "INCREMENT"
})

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "RESET"
})

store.dispatch({
  type: "DECREMENT"
})
