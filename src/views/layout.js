import React from 'react';
import 'src/views/layout.scss'

// this component is just a wrapper for each of the pages
export default React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    )
  }
});
