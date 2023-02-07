import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { username, users } = this.props;
    return (
      <>
        <h2>User Name : {username}</h2>
          {users &&
            users.map((user, key) => (
              <div key={key}>
                <h2> {key} UserName: {user.username} Name: {user.name} Contact : {user.contact}</h2>
              </div>
            ))}
      </>
    );
  }
}
export default UserDetails;
