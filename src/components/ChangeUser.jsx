import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import "../App.css";

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const [changeCity, setChangeCity] = useState("");
  const [changeID, setChangeID] = useState("");

  function changeHandlerName(event) {
    event.preventDefault();
    if (newName || changeCity || changeID) {
      changeUserName({
        ...userName,
        name: newName,
        city: changeCity,
        id: changeID,
      });
    }

    setNewName("");
    setChangeCity("");
    setChangeID("");
  }

  return (
    <div className={"input-style"}>
      <form onSubmit={changeHandlerName}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={changeCity}
          onChange={(event) => setChangeCity(event.target.value)}
        />
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          value={changeID}
          onChange={(event) => setChangeID(event.target.value)}
        />
        <button type="submit">Change User</button>
      </form>
    </div>
  );
}

export default ChangeUser;
