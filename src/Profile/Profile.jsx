import React from 'react';
import PropTypes from 'prop-types';
import profileUser from './profileUser.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className='profileUser'>
      <div>
        <img
          src={image || 'https://via.placeholder.com/150'}
          alt="User avatar"
        />
        <p>{name || 'Unknown User'}</p>
        <p>@{tag || 'unknown'}</p>
        <p>{location || 'Unknown Location'}</p>
      </div>
      <ul>
        <li>
          <span>Followers: </span>
          <span>{stats?.followers || 0}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats?.views || 0}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats?.likes || 0}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
