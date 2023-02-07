import { Component } from "react";
import UserDetails from "./UserDetails";

const users = [
  { username: "ravi", name: "Ravi Raushan", contact: 83484434 },
  { username: "surya", name: "Surya", contact: 83484434 },
  { username: "Shyam", name: "Shyam", contact: 83484434 },
];

class HomeComponent extends Component {
  constructor() {
    super();
    this.state = { name: "Shyam", date: "abc", users: users };
  }

  changeName() {
    this.setState({ name: "Ram" });
  }

  showDate() {
    setInterval(() => {
      this.setState({ date: new Date().toISOString() });
    }, 1000);
  }

  render() {
    const { name, date, users } = this.state;
    // console.log("Users", users)

    return (
      <div>
        <h1>{date}</h1>
        <h1>Name : {name}</h1>
        <button type="button" onClick={() => this.changeName()}>
          Click Here
        </button>
        <button type="button" onClick={() => this.showDate()}>
          Show Date
        </button>

        <UserDetails username="surya" users={this.state.users} />
      </div>
    );
  }
}

export default HomeComponent;
