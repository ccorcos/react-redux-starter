import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { addTodo, toggleFinished, changeNewTodoText } from 'src/redux/actions';
import 'src/views/todos.scss'

const View = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    let {state, dispatch} = this.props
    let Todos = state.get('todos').map( (todo) => {
      let toggle = () => dispatch(toggleFinished(todo))
      return (
        <div className="todo" key={todo.id}>
          <span>{todo.text}</span>
          <input type="checkbox" checked={todo.finished} onChange={toggle}></input>
        </div>
      )
    })
    let change = e =>  dispatch(changeNewTodoText(e))
    let done = e => state.get('newTodoText').length > 0 ? dispatch(addTodo(state.get('newTodoText'))) : false
    return <div className="todos-app">
      <h1>Todos</h1>
      <div className="input-row">
        <input value={state.get('newTodoText')} onChange={change}/>
        <button onClick={done}>add todo</button>
      </div>
      {Todos}
    </div>;
  }
});

// connect top-level react component to redux
import {connect} from 'react-redux';
export default connect(
  state => {return { state: state.todos }},       // map the state to props
  dispatch => {return { dispatch }}  // map the dispatch to props
)(View);
