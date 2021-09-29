import "./FriendsList.css";

const FriendsList = ({ friendsData, setFavroute, onDelete, searchTerm }) => {
  const listOfFriends = friendsData
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((friend, i) => (
      <li className="list" key={friend.id}>
        <div className="list-item">
          <div className="details">
            <h3>{friend.name}</h3>
            {friend.isFavroute === true ? <p>{friend.friendType}</p> : null}
          </div>
          <div className="options">
            <button
              type="button"
              className="favourite"
              onClick={() => setFavroute(friend.id)}
            >
              {friend.isFavroute === true ? (
                <i className="fas fa-star"></i>
              ) : (
                <i className="far fa-star"></i>
              )}
            </button>
            <button
              type="button"
              className="delete"
              onClick={() => onDelete(friend.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </li>
    ));

  return <ul>{listOfFriends}</ul>;
};

export default FriendsList;
