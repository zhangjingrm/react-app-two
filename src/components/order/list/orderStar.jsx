import React from 'react';
import './index.css';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

class OrderStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      star: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  render() {
    return (
      <div className="orderStar">
        <input type="textarea" value={this.state.content} className="orderStar__content" onChange={this.handleInputChange}></input>
        <Rate value={this.state.star} onChange={this.handleStarChange}/>
        <button className="orderStar__btn orderStar__save" onClick={this.save}>确定</button>
        <button className="orderStar__btn orderStar__cancel" onClick={this.cancel}>取消</button>
      </div>
    );
  }

  handleInputChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleStarChange(value) {
    this.setState({
      star: value
    });
  }

  save() {
    this.props.onRateChange(this.state);
  }

  cancel() {
    this.props.onRateCancel();
  }
}

export default OrderStar;