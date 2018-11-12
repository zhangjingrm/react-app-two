import React from 'react';
import OrderItem from './orderItem.js';

class OrderList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      orderList: []
    }
  }

  render () {
    let listItems = this.state.orderList.map((item, index) => 
      <OrderItem detail={item} key={item.id}/>
    );
    return (
      <div>
        {listItems}
      </div>
    );
  }

  componentDidMount () {
    fetch('/mock/orders.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            orderList: data
          })
        })
      }
    });
  }
}

export default OrderList;