// create serializable action objects to be dispatched

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

export function toggleFinished({id}) {
  return {
    type: 'TOGGLE_FINISHED',
    id
  };
}

export function changeNewTodoText(e) {
  return {
    type: 'CHANGE_NEW_TODO_TEXT',
    text: e.target.value
  };
}