import React from 'react';

class Demo7 extends React.Component {
  render () {
    return (
      <div>
        <h1>demo7-组合&继承</h1>
        <SignUpDialog />
      </div>
    );
  }
}

/*--------------------------------------1-----------------------------------------*/

// class FancyBorder extends React.Component {
//   render () {
//     return (
//       <div>
//         <p>这是组件自身的内容</p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

// function WelcomeDialog () {
//   return (
//     <FancyBorder>
//       <span>这是插入的内容</span>
//     </FancyBorder>
//   );
// }

/*--------------------------------------2-----------------------------------------*/

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      login: ''
    }
  }

  handleSubmit (e) {
    console.log(this.state.login)
    e.preventDefault();
  }

  handleChange (e) {
    this.setState({
      login: e.target.value
    })
  }

  render () {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input type="text" value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </Dialog>
    );
  }
}

export default Demo7;






