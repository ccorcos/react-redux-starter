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

export function changeGifText(e) {
  return {
    type: 'CHANGE_GIF_TOPIC_TEXT',
    text: e.target.value
  };
}

export function fetchGif(topic) {
  return dispatch => {
    dispatch({
      type: 'LOADING_GIF',
    })
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${topic}`)
      .then(function(response) {
        return response.json()
      })
      .then(function({data}) {
        dispatch({
          type: 'NEW_GIF',
          url: data.image_url
        })
      })  
      .catch(function(error) {
        return {
          type: 'ERROR_GIF'
        }
      })
  }
}