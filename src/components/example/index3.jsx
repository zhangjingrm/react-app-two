import React from 'react';

class Index3 extends React.Component {
  render() {
    return (
      <div className="index3">
        <h1>react属性传递-props传递</h1>
        <AncestorComponent color="yellow" size="14" num="3.14"/>
      </div>
    );
  }
}

class AncestorComponent extends React.Component {
  render() {
    return (
      <div className="ancestorComponent">
        祖先组件
        <ParentComponentLeft {...this.props}></ParentComponentLeft>
        <ParentComponentRight onFormSave={this.handleFormSave.bind(this)}></ParentComponentRight>
      </div>
    );
  }

  handleFormSave(value) {
    console.log(value, 'value2');
  }
}

class ParentComponentLeft extends React.Component {
  render() {
    return (
      <div className="parentComponent parentComponent__left">
        父组件-左
        <ChildComponentLeft1 {...this.props}></ChildComponentLeft1>
        <ChildComponentLeft2></ChildComponentLeft2>
      </div>
    );
  }
}

class ParentComponentRight extends React.Component {
  render() {
    return (
      <div className="parentComponent parentComponent__right">
        父组件-右
        <ChildComponentRight1 onFormSave={this.handleFormSave.bind(this)}></ChildComponentRight1>
        <ChildComponentRight2></ChildComponentRight2>
      </div>
    );
  }

  handleFormSave(value) {
    console.log(value, 'value');
    this.props.onFormSave(value);
  }
}

class ChildComponentLeft1 extends React.Component {
  render() {
    return (
      <div className="childComponent childComponent__left1">
        子组件-左1<br />
        color: {this.props.color},
        num: {this.props.num},
        size: {this.props.size},
      </div>
    );
  }
}

class ChildComponentLeft2 extends React.Component {
  render() {
    return (
      <div className="childComponent childComponent__left2">
        子组件-左2
      </div>
    );
  }
}

class ChildComponentRight1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: ''
    }
  }

  render() {
    return (
      <div className="childComponent childComponent__right1">
        子组件-右1<br />
        <input value={this.state.input1} onChange={this.handleChange1.bind(this)} />
        <input value={this.state.input2} onChange={this.handleChange2.bind(this)} />
        <button onClick={this.save.bind(this)}>save</button>
      </div>
    );
  }

  handleChange1(event) {
    this.setState({
      input1: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      input2: event.target.value
    });
  }

  save() {
    this.props.onFormSave(this.state);
  }
}

class ChildComponentRight2 extends React.Component {
  render() {
    return (
      <div className="childComponent childComponent__right2">
        子组件-右2
      </div>
    );
  }
}


export default Index3;