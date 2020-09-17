import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "King Osric",
      image:
        "https://static.wikia.nocookie.net/conan/images/1/17/King_Osric.jpg/revision/latest/scale-to-width-down/269?cb=20131022030346",
      places: 3,
    },
    {
      id: "u2",
      name: "Conan",
      image:
        "https://i.guim.co.uk/img/media/65591ba419de07f2f7acc6abc964d85fe7187c05/0_269_1782_1069/master/1782..jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aa9a8a04848641d29c896baa79178487",
      places: 1,
    },
    {
      id: "u3",
      name: "Thulsa Doom",
      image:
        "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98260/2150838-19179107.jpg",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
