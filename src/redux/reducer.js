import {List, Map} from 'immutable';

// use immutable.js to efficiently share data structures
const initialState = Map({
  nextId: 0,
  todos: List(),
  newTodoText: ''
})

// immutably produce the next state from the previous state and some action
export default function(state = initialState, action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.update('todos', function(todos) {
      return todos.push({
        id: state.get('nextId'),
        text: action.text,
        finished: false
      })
    }).update('nextId', id => id + 1).set('newTodoText', '')
  case 'TOGGLE_FINISHED':
    return state.update('todos', function(todos) {
      return todos.update(
        todos.findIndex(todo => todo.id === action.id),
        todo => Object.assign({}, todo, {finished: !todo.finished})
      )
    })
  case 'CHANGE_NEW_TODO_TEXT':
    return state.set('newTodoText', action.text)
  }
  return state;
}