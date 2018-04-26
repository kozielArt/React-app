import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remoe expense action object ', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  })
})

test('should setup edit expense action object ', () => {
  const action = editExpense('123', { note: 'note text' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'note text'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'coffe',
    amount: 2000,
    createdAt: 1000,
    note: 'note abc'
  }

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})