import { useState } from "react";
import FriendsList from "../List/FriendsList";
import FriendInputLogic from "./FriendInputLogic";

import Pagination from "../Pagination/Pagination";

//css
import "./FriendInput.css";

const FriendInput = () => {
  const { name, addFriendName, handleFavroute, HandleDelete } =
    FriendInputLogic();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = name.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        friendsData={currentPosts}
        setFavroute={(e) => handleFavroute(e)}
        onDelete={(e) => HandleDelete(e)}
        searchTerm={search}
      />
      {name.length > 4 ? (
        <Pagination
          firendsPerPage={postsPerPage}
          totalFriends={name.length}
          paginate={paginate}
        />
      ) : null}
    </div>
  );
};

export default FriendInput;
