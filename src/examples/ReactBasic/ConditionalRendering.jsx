import React, { useEffect, useState } from "react";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default function ConditionalRendering() {
  let button;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    console.log("UseEffect");
    button = isLoggedIn ? (
      <LogoutButton onClick={handleLogout} />
    ) : (
      <LoginButton onClick={handleLogin} />
    );
  }, [isLoggedIn]);

  button = isLoggedIn ? (
    <LogoutButton onClick={handleLogout} />
  ) : (
    <LoginButton onClick={handleLogin} />
  );

  let h1El;
  h1El = isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>;
  return (
    <>
      {h1El}
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}
