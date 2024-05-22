import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
  const { userName } = useContext(UserContext);

  return (
    <>
      <h1>{userName.name}</h1>
      <h2>{userName.city}</h2>
      <h2>{userName.id}</h2>
    </>
  );
}

export default UserInfo;
