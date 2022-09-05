import user from '../../src/user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../../src/transactions.json';
import FriendList from './FriendList';
import Statistics from './Statistics';
import Profile from './Profile';
import TransactionHistory from './TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
