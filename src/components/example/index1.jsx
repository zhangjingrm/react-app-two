import React, {Component} from 'react';
import './index1.css';

class Index1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectName: ''
    };
    this.updateProps = this.updateProps.bind(this);
  }

  updateProps () {
    this.setState({
      projectName: '12'
    })
  }

  render () {
    return (
      <div>
        <IndexChild props1={this.state.projectName} />
        <button onClick={this.updateProps}>Update props</button>
      </div>
    );
  }
}

//constructor-componentWillMount-render-componentDidMount
//点击按钮Update shouldComponentUpdate
//点击按钮Update props componentWillReceiveProps - shouldComponentUpdate
class IndexChild extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectName: props.projectName
    }
    this.componentUpdate = this.componentUpdate.bind(this);
    console.log('constructor');
  }

  componentUpdate () {
    this.setState({
      projectName: 'test'
    });
  }

  render () {
    console.log('render');
    return (
      <div>
        <h1>Index1-生命周期</h1>
        <button onClick={this.componentUpdate}>Update</button>
      </div>
    );
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', 'nextProps:' + nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', 'nextProps:' + nextProps, 'nextState:' + nextState);
    if (nextProps.projectName !== this.props.projectName) {
      return true;
    }
    return false;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', 'nextProps:' + nextProps, 'nextState:' + nextState);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', 'prevProps:' + prevProps, 'prevState:' + prevState);
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }
}

export default Index1;