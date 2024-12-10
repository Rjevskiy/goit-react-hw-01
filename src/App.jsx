import React from 'react';
import Profile from './components/Profile/Profile';
import userData from './components/Profile/userData.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

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
