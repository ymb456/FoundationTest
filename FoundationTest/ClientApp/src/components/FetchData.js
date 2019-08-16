import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { messages: [], loading: true };
      this.timer = this.timer.bind(this);
    
  }
    componentDidMount = function() {
    var intervalId = setInterval(this.timer, 1000);
    }

    timer = function () {
        fetch('api/Messages')
            .then(response => response.json())
            .then(data => {
                this.setState({ messages: data, loading: false });
            });
    }
  static renderMessagesTable (messages) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Summary</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message =>
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.client}</td>
              <td>{message.text}</td>
              <td>{message.created}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderMessagesTable(this.state.messages);

    return (
      <div>
        <h1>Environment Message</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
