import React, { Fragment, useState } from "react";

export default function ReactFragment() {
  return (
    <Fragment>
      <h2>Heading 1</h2>
      <ListUser />
    </Fragment>
  );
}
const usersList = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
  { id: 4, name: "User4" },
];

function ListUser() {
  const [users, setUsers] = useState(usersList);

  return (
    <ul>
      {users.map((user, key) => (
        <Fragment>
          <li>{user.id}</li>
          <li>{user.name}</li>
        </Fragment>
      ))}
    </ul>
  );
}
