import React from 'react';

class Demo9 extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return [
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
}

export default Demo9;