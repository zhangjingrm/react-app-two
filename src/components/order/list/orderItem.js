import React from 'react';

class OrderItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imgUrl: '',
      title: '',
      info: '',
      price: '',
      status: false
    }
  }

  render () {
    return (
      <div>
        <div><img content={this.state.imgUrl}/></div>
        <div>
          <Title content={this.state.title}/>
          <Info content={this.state.info}/>
          <Price content={this.state.price}/>
        </div>
        <div>
          <RateButton content={this.state.status}/>
        </div>
      </div>
    );
  }

  componentDidMount () {
    // this.setState({
    //   imgUrl: this.props.detail.imgUrl,
    //   title: this.props.detail.title,
    //   info: this.props.detail.info,
    //   price: this.props.detail.price,
    //   status: false
    // })
  }

  componentDidUpdate () {
    console.log(this.props.detail)
    this.setState({
      imgUrl: this.props.detail.imgUrl,
      title: this.props.detail.title,
      info: this.props.detail.info,
      price: this.props.detail.price,
      status: false
    })
  }
}

class Pic extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <img src={this.state.content}/>
    );
  }
}

class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <h1>{this.state.content}</h1>
    );
  }
}

class Info extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <p>{this.state.content}</p>
    );
  }
}

class Price extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <p>$ {this.state.content}</p>
    );
  }
}

class RateButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render () {
    return (
      <button>评价</button>
    );
  }
}

export default OrderItem;