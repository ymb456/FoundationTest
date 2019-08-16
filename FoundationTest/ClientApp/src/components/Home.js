import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>This is a test for Foundation Medicine</h1>
        <p>Please click on Messages to see the list of current messages. Once new message is pushed to the Database the browser will update the view in 10 sec</p>
      </div>
    );
  }
}
