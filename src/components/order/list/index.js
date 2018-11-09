import React from 'react';
import OrderItem from './orderItem.js';

class OrderList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      orderItem: {}
    }
  }

  render () {
    return (
      <div>
        <OrderItem detail={this.state.orderItem}/>
      </div>
    );
  }

  componentDidMount () {
    //模拟请求
    this.setState({
      orderItem: {
        imgUrl: 'https://img.mukewang.com/571db8940001418006000338-240-135.jpg',
        title: '百香果冷饮一扎',
        info: '院落创意菜',
        price: 19.9
      }
    })
  }
}

export default OrderList;