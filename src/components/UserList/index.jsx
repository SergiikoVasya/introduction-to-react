import "../../App.css";
import React, { useState } from "react";

function UserList({ users }) {
  const [rel, setRel] = useState([]);
  const [clicked, setClicked] = useState("");

  const clickElem = (user) => {
    if (clicked === user.id){
        setRel([]);
        setClicked("");
        return;
    }
    setRel(user.relations);
    setClicked(user.id);
  };

  return (
    <div className="App">
      <ol>
        {users.map((item) => (
          <li
            key={item.id}
            onClick={() => clickElem(item)}
            className={
              rel.includes(item.id)
                ? "green"
                : clicked === item.id
                ? "orange"
                : ""
            }
          >
            {item.content}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
