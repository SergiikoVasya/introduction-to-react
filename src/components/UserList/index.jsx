import "../../App.css";
import "./UserList.css"
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
        {users.map((item) => (
          <div key={item.id}
            onClick={() => clickElem(item)}
            className={
              rel.includes(item.id)
                ? "box green"
                : clicked === item.id
                ? "box orange"
                : "box"
            }>
            <p>{item.content}</p>

            </div>))}
    </div>
  );
}

export default UserList;
