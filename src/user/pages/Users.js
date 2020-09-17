import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Von Sydow",
      image:
        "https://i.pinimg.com/originals/a8/61/e6/a861e6fb0aab90e66e78607360613c53.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Arnold Swarzenegger",
      image:
        "https://i.guim.co.uk/img/media/65591ba419de07f2f7acc6abc964d85fe7187c05/0_269_1782_1069/master/1782..jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aa9a8a04848641d29c896baa79178487",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
