import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor (props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter () {
      fetch('api/Messages', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({
              client: "",
              id: 0,
             // created: Date.now().toString(),
              text: "",
        messages: null
          }), // data can be `string` or {object}!
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(
          res => {
              let test = res.json();
              return test;
          }
      ).then(data => {
          let test2 = data;
      })
  }

  render () {
    return (
      <div>
        <h1>Push New Mewssage</h1>


        <p>Please click button to push new message to the database></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Push</button>
      </div>
    );
  }
}
