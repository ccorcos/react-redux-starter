import {List, Map} from 'immutable';
import { combineReducers } from 'redux'

// use immutable.js to efficiently share data structures
const initialTodosState = Map({
  nextId: 0,
  todos: List(),
  newTodoText: ''
})

// immutably produce the next state from the previous state and some action
function todosReducer(state = initialTodosState, action) {
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

const initialGiphyState = Map({
  topic: '',
  url: null,
  loading: false,
  error: false
})

function giphyReducer(state = initialGiphyState, action) {
  switch(action.type) {
  case 'CHANGE_GIF_TOPIC_TEXT':
    return state.set('topic', action.text)
  case 'LOADING_GIF': 
    return state.set('loading', true)
  case 'NEW_GIF':
    return state.set('url', action.url).set('loading', false).set('error', false).set('topic', '')
  case 'ERROR_GIF':
    return state.set('error', true).set('loading', false).set('url', null)
  }
  return state
}

export default combineReducers({giphy: giphyReducer, todos: todosReducer})
