import React from 'react';
import PropTypes from 'prop-types';
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div>
        <img
          src={image || 'https://via.placeholder.com/150'}
          alt="User avatar"
        />
        <h2>{name || 'Unknown User'}</h2>
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
