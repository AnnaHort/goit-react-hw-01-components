import { Profile } from './profile/profile';
import profileItems from '../user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsStats from '../data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json'
import { GlobalStyle } from './GlobalStyle';
export const App = () => {
  return (
    <div>
      <Profile items={profileItems} />
      <Statistics title="Upload stats" stats={statisticsStats} />
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
      <GlobalStyle/>
    </div>
  );
};


