import React from 'react';

class Demo4 extends React.Component {
  render () {
    return (
      <div>
        <h1>demo4-条件渲染</h1>
        <Greeting isLoggedIn={false}/>
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />
  }
}

export default Demo4;