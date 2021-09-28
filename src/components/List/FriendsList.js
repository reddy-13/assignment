import "./FriendsList.css";

const FriendsList = ({ friendsData, setFavroute, onDelete }) => {
  const listOfFriends = friendsData.map((friend, i) => (
    <li className="list" key={friend.id}>
      <div className="list-item">
        <div className="details">
          <h3>{friend.name}</h3>
          <p>{friend.friendType}</p>
        </div>
        <div className="options">
          <button
            type="button"
            className="favroute"
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