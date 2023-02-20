import React, { Component, Fragment } from "react";

export default function HOC() {
  return (
    <div>
      <h2>HOC Example</h2>
      <MyComponentWithAuth />
      <MyComponentWithCounter />
    </div>
  );
}

const withAuth = (WrappedComponent) => {
  class WithAuth extends Component {
    state = { isAuth: false };

    componentDidMount() {
      const token = "";
      if (token) {
        this.setState({ isAuth: true });
      }
    }

    render() {
      const { isAuth } = this.state;
      if (isAuth) {
        return <WrappedComponent {...this.props} />;
      }
      return <h2>Please login!</h2>;
    }
  }

  return WithAuth;
};

const MyComponent = () => <h2>Welcome to the App!</h2>;
const MyComponentWithAuth = withAuth(MyComponent);

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    state = { count: 0 };

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

const ShowCounterComponent = ({ count, increment }) => {
  return (
    <Fragment>
      <h2>Total Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </Fragment>
  );
};
const MyComponentWithCounter = withCounter(ShowCounterComponent);
