import { useState } from "react";

const FriendInputLogic = () => {
  const [name, setName] = useState([]);

  const addFriendName = (friendName) => {
    let uniqueId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    setName([
      ...name,
      {
        id: uniqueId(),
        name: friendName,
        friendType: "is your Friend",
        isFavroute: false,
      },
    ]);
  };

  // this function handles favriout button on click
  const handleFavroute = (id) => {
    // looping over friends list
    const updatedFriends = name.map((friend) => {
      // if this friend list favrioute toggle
      if (id === friend.id) {
        // use object spread to make a new object
        // whose `isFavroute` prop has been inverted
        return { ...friend, isFavroute: !friend.isFavroute };
      }
      return friend;
    });
    setName(updatedFriends);
  };

  // delete Friend
  const HandleDelete = (id) => {
    const remainingFriends = name.filter((friend) => id !== friend.id);
    setName(remainingFriends);
  };

  return { name, setName, addFriendName, handleFavroute, HandleDelete };
};

export default FriendInputLogic;
