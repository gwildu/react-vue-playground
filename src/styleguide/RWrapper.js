import React, { createClass } from 'react';

export default createClass({
  render() {
    return (
      <div className="ric-card">
        <header className="ric-card__header">
          <h1>I'm React</h1>
        </header>
        <div className="ric-card__content">
          {this.props.children}
        </div>
      </div>
    )
  }
})
