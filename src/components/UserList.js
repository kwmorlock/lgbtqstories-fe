import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./comp.css";
import AdminHeader from "./AdminHeader";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTag(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/users`)
      .then((res) => {
        setUsers(
          res.data.filter((users) => {
            if (searchTag === "") {
              return users;
            } else if (
              users.username.toLowerCase().includes(searchTag.toLowerCase()) ||
              users.email.toLowerCase().includes(searchTag.toLowerCase())
            ) {
              return users;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTag]);

  return (
    <>
      <AdminHeader />
      <div>
        <div>
          <form>
            <input
              class="center"
              onChange={changeHandler}
              type="text"
              placeholder="Search Users"
              value={searchTag}
            />
          </form>
        </div>

        <div>
          {users.map((users) => (
            <div
              class="colors"
              key={users.id}
              style={{
                margin: "20px auto",
                width: "40%",
                backgroundColor: "hotpink",
                border: "3px solid purple",
              }}
            >
              <div key={users.id}>
                <p>Username: {users.username}</p>
                <p>Email: {users.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
