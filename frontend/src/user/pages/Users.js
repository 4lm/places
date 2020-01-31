import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image: "https://i.pravatar.cc/300?img=54",
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
