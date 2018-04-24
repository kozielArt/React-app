import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// {} = {} if no object is provided as an argument and we try to destructure it it is gonna get default values ' description = '' ' 
const addExpense = ({ description = '', note = '', amount = '', createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  id: uuid(),
  description,
  note,
  amount,
  createdAt
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id) //create the array for all the expanses that id doesn't match the id from the action object 
    default:
      return state;
  }
}
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({id: expenseOne.id}))

const person = { 
  name: "artur",
  age: 21
}

console.log({
  ...person
})
