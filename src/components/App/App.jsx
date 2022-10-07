import Box from './Box';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import FriendList from '../Friends/FriendList';
import Statistics from '../Statistics/Statistics';
import Profile from '../Profile/Profile';
import TransactionHistory from '../Transactions/TransactionHistory';
export const App = () => {
  return (
    <Box
      textAlign="center"
      pl="300px"
      pr="300px"
      pt="30px"
      pb="30px"
      bg="#dae4e8"
    >
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
    </Box>
  );
};
