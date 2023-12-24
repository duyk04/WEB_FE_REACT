import React, { Component } from 'react'

export default class ViewConact extends Component {
  render() {
    let {renderContact} = this.props;
    return (
      <div className='container alert alert-info mt-3'>
        <h2>ViewConact</h2>
        <h3>Name: {renderContact.name} </h3>
        <h3>Phone: {renderContact.phone}</h3>
      </div>
    )
  }
}
