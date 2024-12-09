import React from 'react';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import userData from './Profile/userData.json';
import friends from './FriendList/friends.json';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>My Friends</h2>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
