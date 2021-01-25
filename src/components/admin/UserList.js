import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import AdminHeader from "./AdminHeader";
import { AdminInput, AdminDiv, AdminButton } from "../styles/AdminStyles";

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
          res.data.users.filter((users) => {
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

  const deleteUser = (user) => {
    axiosWithAuth()
      .delete(`/api/users/users/${user.id}`, user)
      .then((res) => {
        console.log(res);
        document.location.reload();
      })
      .catch((err) => console.log("sorry, not working", err.res));
  };

  return (
    <>
      <AdminHeader />
      <div>
        <div>
          <form>
            <AdminInput
              onChange={changeHandler}
              type="text"
              placeholder="Search Users"
              value={searchTag}
            />
          </form>
        </div>

        <div>
          {users.map((users) => (
            <AdminDiv key={users.id}>
              <div key={users.id}>
                <p>Username: {users.username}</p>
                <p>Email: {users.email}</p>
                <AdminButton onClick={() => deleteUser(users)}>
                  Delete
                </AdminButton>
              </div>
            </AdminDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
