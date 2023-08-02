import { Profile } from './profile';
import profileItems from '../user.json';
import { Statistics } from './Statistics';
import statisticsStats from '../data.json';
import { FriendsList } from './FriendsList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../transactions.json'
export const App = () => {
  return (
    <div>
      <Profile items={profileItems} />
      <Statistics title="Upload stats" stats={statisticsStats} />
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
