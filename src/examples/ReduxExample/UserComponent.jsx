import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUserStatus } from "./UserSlice";

export default function UserComponent() {
  const status = useSelector(selectUserStatus);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  return (
    <div>
      <h1> Status : {status}</h1>
      {/* <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Increment</button> */}
    </div>
  );
}
