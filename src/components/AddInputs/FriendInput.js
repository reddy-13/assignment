import { useState } from "react";
import FriendsList from "../List/FriendsList";
import FriendInputLogic from "./FriendInputLogic";

//css
import "./FriendInput.css";

const FriendInput = () => {
  const { name, addFriendName, handleFavroute, HandleDelete } =
    FriendInputLogic();

  const [search, setSearch] = useState("");

  // handling onkey press | On Enter adds names to frienslist
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        alert("Please enter your firend's name");
      } else {
        addFriendName(event.target.value);
        event.target.value = "";
        setSearch("");
      }

      // console.log("enter press here! ", event.target.value); // for debugging purpose only
    }
  };

  return (
    <div className="friend-input-outer">
      <input
        type="text"
        className="form-input"
        name="name"
        onKeyPress={handleKeyPress}
        placeholder="Enter your firends name"
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
      <FriendsList
        friendsData={name}
        setFavroute={(e) => handleFavroute(e)}
        onDelete={(e) => HandleDelete(e)}
        searchTerm={search}
      />
    </div>
  );
};

export default FriendInput;
