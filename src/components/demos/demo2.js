import React, { Component } from 'react';

class Demo2 extends Component {
  render() {
    return (
      <StateDemo1 date={new Date()}/>
    );
  }
}

class StateDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    };
  }

  render() {
    return (
      <div>
        <h1>demo2-State</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }
}

export default Demo2;