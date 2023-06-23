import user from '../DataJSON/user'
import data from '../DataJSON/data'
// import friends from '../DataJSON/friends'
// import transactions from '../DataJSON/transactions'

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statisics";
// import FriendList from "./FriendList/FriendList"



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        title="Upload stats" 
        stats={data}
      />

      {/* <FriendList 
      friends={friends}
      /> */}

    </div>
  );
};
