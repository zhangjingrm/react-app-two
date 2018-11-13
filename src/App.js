import React, { Component } from 'react';
import './App.css';
import Demo1 from './components/demos/demo1';
import Demo2 from './components/demos/demo2';
import Demo3 from './components/demos/demo3.jsx';
import Demo4 from './components/demos/demo4';
import Demo5 from './components/demos/demo5.jsx';
import Demo6 from './components/demos/demo6.jsx';
import Demo7 from './components/demos/demo7.jsx';
import Demo8 from './components/demos/demo8.jsx';
import Demo9 from './components/demos/demo9.jsx';

import Index1 from './components/example/index1.jsx';
import Index2 from './components/example/index2.jsx';
import Index3 from './components/example/index3.jsx';

import OrderList from './components/order/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Demo1 />*/}
        {/*<Demo2 />*/}
        {/*<Demo3 />*/}
        {/*<Demo4 />*/}
        {/*<Demo5 />*/}
        {/*<Demo6 />*/}
        {/*<Demo7 />*/}
        {/*<Demo8 />*/}
        {/*<Demo9 />*/}

        {/*<Index1 />*/}
        {/*<Index2 />*/}
        <Index3 />

        {/*<OrderList />*/}
      </div>
    );
  }
}

export default App;
