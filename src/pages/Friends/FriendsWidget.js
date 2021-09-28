import React from "react";

// css
import "./FriendsWidget.css";
// components
import Header from "../../components/Header/Header";
import SearchInput from "../../components/AddInputs/FriendInput";

// friends list component
const FriendsWidget = () => {
  return (
      <div className="firends-list-widget">
        <Header title="Friends list" />
        <SearchInput />
    </div>
  );
};

export default FriendsWidget;
