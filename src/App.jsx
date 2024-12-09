import React from 'react';
import Profile from './Profile/Profile';
import userData from './Profile/userData.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

const toCapitalCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const App = () => {
  
  const modifiedTransactions = transactions.map((transaction) => ({
    ...transaction,
    type: toCapitalCase(transaction.type),
  }));

  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={modifiedTransactions} />
    </div>
  );
};

export default App;
