import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
import Index4 from './components/example/index4.jsx';

import OrderList from './components/order/list';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="list">
            <li><Link to="demo1">demo1</Link></li>
            <li><Link to="demo2">demo2</Link></li>
            <li><Link to="demo3">demo3</Link></li>
            <li><Link to="demo4">demo4</Link></li>
            <li><Link to="demo5">demo5</Link></li>
            <li><Link to="demo6">demo6</Link></li>
            <li><Link to="demo7">demo7</Link></li>
            <li><Link to="demo8">demo8</Link></li>
            <li><Link to="demo9">demo9</Link></li>
            <li><Link to="example1">example1</Link></li>
            <li><Link to="example2">example2</Link></li>
            <li><Link to="example3">example3</Link></li>
            <li><Link to="example4">example4</Link></li>
            <li><Link to="orderList">orderList</Link></li>
          </ul>

          <ul className="list">
            <li></li>
          </ul>

          <hr />

          <Route exact path="/" component={Demo1} />
          <Route path="/demo2" component={Demo2} />
          <Route path="/demo3" component={Demo3} />
          <Route path="/demo4" component={Demo4} />
          <Route path="/demo5" component={Demo5} />
          <Route path="/demo6" component={Demo6} />
          <Route path="/demo7" component={Demo7} />
          <Route path="/demo8" component={Demo8} />
          <Route path="/demo9" component={Demo9} />

          <Route path="/example1" component={Index1} />
          <Route path="/example2" component={Index2} />
          <Route path="/example3" component={Index3} />
          <Route path="/example4" component={Index4} />

          <Route path="/orderList" component={OrderList} />
        </div>
      </Router>
    );
  }
}

export default App;
