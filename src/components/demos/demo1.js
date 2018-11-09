import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Demo1 extends Component {
  render() {
    return (
      <div>
        <h1>一、demo1-Component</h1>
        <ClassComponent />
        <FunctionalComponent />
        <FunctionComponent name="JavaScript" />
        <p>1.使用 ES6 的 Class</p>
      </div>
    );
  }
}

class ClassComponent extends React.Component {
  render() {
    return (
      <p>1.使用 ES6 的 Class({this.props.name})</p>
    );
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }
}

ClassComponent.propTypes = {
  todo: PropTypes.object,
  name: PropTypes.string,
}

ClassComponent.defaultProps = {
  name: 'test',
  todo: {}
}

const FunctionalComponent = () => (
  <p>2.使用 Functional Component 写法</p>
)

function FunctionComponent (props) {
  return <p>2.1,使用 {props.name} 函数</p>;
}

export default Demo1;