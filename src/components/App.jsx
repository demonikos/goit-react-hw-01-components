import user from '../DataJSON/user'
import data from '../DataJSON/data'
import friends from '../DataJSON/friends'
import transactions from '../DataJSON/transactions'

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statisics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"



export const App = () => {
  return (
    <div className='myContainer'
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <div className='mySections myProfile'>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </div>  

      <div className='mySections'>
      <Statistics 
        title="Upload stats" 
        stats={data}
      />
      </div>

      <div className='mySections'>
      <FriendList 
      friends={friends}
      />
      </div>

      <div className='mySections'>
      <TransactionHistory 
      items={transactions}
      />
      </div>

    </div>
  );
};
