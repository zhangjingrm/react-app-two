import React from 'react';

let formItem = {
  projectName: '',
  projectSelect: '',
}

class Demo5 extends React.Component {
  render () {
    return (
      <div>
        <h1>demo5-表单</h1>
        <NameForm formItem={formItem}/>
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectName: props.projectName,
      projectSelect: props.projectSelect
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectCHange = this.handleSelectCHange.bind(this);
  }

  handleChange (event) {
    this.setState({
      projectName: event.target.value
    });
  }

  handleSelectCHange (event) {
    this.setState({
      projectSelect: event.target.value
    })
  }

  handleSubmit (e) {
    console.log(e, this.state);
    e.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <textarea type="text" value={this.state.projectName} onChange={this.handleChange} />
        </label>
        <label>
          select:
          <select value={this.state.projectSelect} onChange={this.handleSelectCHange}>
            <option>Grapefruit</option>
            <option>Lime</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Demo5;