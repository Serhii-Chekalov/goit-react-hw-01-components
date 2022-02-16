import styled from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li key={friend.id} className={styled.item}>
      <span
        className={friend.isOnline ? styled.statusOn : styled.statusOff}
      ></span>
      <img
        className={styled.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styled.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
