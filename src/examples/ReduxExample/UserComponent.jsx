import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchSingleUser, selectUserError, selectUserList, selectUserStatus } from "./UserSlice";

export default function UserComponent() {
  const status = useSelector(selectUserStatus);
  const user = useSelector(selectUserList);
  const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchSingleUser())
  },[dispatch])
  return (
    <div>
      <h1> Status : {status}</h1>
      {error && <h2>Error: {error}</h2>}

<p>{user.name}</p>
      {/* {userList && userList.map((user, key)=>(
        <p key={user.id}>{user.name}</p>
      ))} */}
      
    </div>
  );
}
