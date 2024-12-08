import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ name, isOnline }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
