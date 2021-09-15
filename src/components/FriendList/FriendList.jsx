import PropTypes from 'prop-types';
import styled from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styled.friendlist}>
      {friends.map(friend => (
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
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
