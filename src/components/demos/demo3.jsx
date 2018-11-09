import React, { Component } from 'react';

class Demo3 extends Component {
  render() {
    return (
      <div>
        <h1>demo3-事件</h1>
        <EventDemo1 />

        <h2>向事件处理函数传递参数</h2>
        <EventDemo2 />
      </div>
    );
  }
}

class EventDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class EventDemo2 extends React.Component {
  constructor (props) {
    super(props);
  }

  delNode1 (e1, e2) {
    console.log(e1, e2, 'test1');
  }

  delNode2 (e1, e2) {
    console.log(e1, e2, 'test2');
  }

  render () {
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((item, index) => {
      return <li key={index}>{item} 
               <button onClick={(e) => this.delNode1(item, e)}>button-箭头函数-{item}</button>
               <button onClick={this.delNode2.bind(this, item)}>button-bind-{item}</button>
             </li>
    });
    return (
      <ul>
        {numbers.map((item, index) => 
          <li key={index}>{item} 
            <button onClick={(e) => this.delNode1(item, e)}>button-箭头函数-{item}</button>
            <button onClick={this.delNode2.bind(this, item)}>button-bind-{item}</button>
          </li>
        )}
      </ul>
    )
  }
}

export default Demo3;