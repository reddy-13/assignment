import { useState } from "react";

const FriendInputLogic = () => {
  const [name, setName] = useState([]);

  const addFriendName = (friendName) => {
    // random unique id genrator
    let uniqueId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    // pushes new object
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
    // updates friends by sorting favrourite friend as top
    setName(updatedFriends.sort((x, y) => y.isFavroute - x.isFavroute));
  };

  // delete Friend
  const HandleDelete = (id) => {
    const con = window.confirm("Are you sure want to delete ?");
    if (con) {
      const remainingFriends = name.filter((friend) => id !== friend.id);
      setName(remainingFriends);
    }
  };

  return { name, setName, addFriendName, handleFavroute, HandleDelete };
};

export default FriendInputLogic;
