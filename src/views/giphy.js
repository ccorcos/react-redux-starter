import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { fetchGif, changeGifText } from 'src/redux/actions';
import 'src/views/giphy.scss'

const View = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    let {state, dispatch} = this.props
    let src = state.get('error') ? 
      require('src/images/error.gif') : state.get('loading') ?
      require('src/images/loading.gif') : state.get('url') ?
      state.get('url') : ''
      
    let change = e =>  dispatch(changeGifText(e))
    let done = e => state.get('topic').length > 0 ? dispatch(fetchGif(state.get('topic'))) : false
    return <div className="giphy-app">
      <h1>Giphy</h1>
      <div className="input-row">
        <input value={state.get('topic')} onChange={change} placeholder="topic"/>
        <button onClick={done}>random gif</button>
      </div>
      <img src={src}/>
    </div>;
  }
});

// connect top-level react component to redux
import {connect} from 'react-redux';
export default connect(
  state => {return { state: state.giphy }},       // map the state to props
  dispatch => {return { dispatch }}  // map the dispatch to props
)(View);
