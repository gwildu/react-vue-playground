import React, { createClass } from 'react';

export default createClass({
  typeClass: 'ric-button--primary mdl-js-button mdl-js-ripple-effect',
  increase: 2,
  act () {
    this.props.act(2)
  },
  render() {
    return (
      <span>
        <button onClick={this.act} className='ric-button--primary mdl-js-button mdl-js-ripple-effect'>
          {this.props.inside}
        </button>&nbsp;
        <div className="ric-sum">I'm the outer sum inside the inner component: <strong>{this.props.count}</strong></div>
      </span>
    )
  }
})
