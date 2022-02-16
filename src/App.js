import styled from './App.module.css';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import { SocialProfile } from './components/SocialProfile/SocialProfile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { FriendList } from './components/FriendList/FriendList.jsx';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.jsx';

function App() {
  return (
    <div className={styled.wrapper}>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
