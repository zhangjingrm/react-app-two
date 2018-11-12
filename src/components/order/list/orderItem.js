import React from 'react';
import './index.css';
import OrderStar from './orderStar.jsx';

class OrderItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imgUrl: '',
      title: '',
      info: '',
      price: '',
      status: props.detail.status,
      showStar: false
    }
  }

  render () {
    const { imgUrl, title, info, price, status } = this.props.detail;
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img className="orderItem__pic" src={imgUrl}/>
        </div>
        <div className="orderItem__content">
          <h1 className="orderItem__title">{title}</h1>
          <p className="orderItem__info">{info}</p>
          <p className="orderItem__price">$ {price}</p>
        </div>
        <div className="orderItem__operater">
          { this.state.status ? (
              <button className="orderItem__btn orderItem__btn--gray">已评价</button>
            ) : (
              <button className="orderItem__btn orderItem__btn--red" onClick={this.handleClick.bind(this)}>评价</button>
            ) 
          }
        </div>
        {
          this.state.showStar && 
          <div className="orderItem__star">
            <OrderStar onRateChange={this.handleRateChange.bind(this)} onRateCancel={this.handleRateCancel.bind(this)}></OrderStar>
          </div>
        }
      </div>
    );
  }

  handleClick() {
    this.setState({
      showStar: true
    });
  }

  handleRateChange(value) {
    this.setState({
      showStar: false,
      status: true
    });
  }

  handleRateCancel() {
    this.setState({
      showStar: false
    });
  }
}

export default OrderItem;