import styled from './stats.module.css';
import PropTypes from 'prop-types';

const ProfileStats = ({ stats }) => {
  return (
    <ul className={styled.stats}>
      <li className={styled.statsItem}>
        <span className={styled.label}>Followers</span>
        <span className={styled.quantity}>{stats.followers}</span>
      </li>
      <li className={styled.statsItem}>
        <span className={styled.label}>Views</span>
        <span className={styled.quantity}>{stats.views}</span>
      </li>
      <li className={styled.statsItem}>
        <span className={styled.label}>Likes</span>
        <span className={styled.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
