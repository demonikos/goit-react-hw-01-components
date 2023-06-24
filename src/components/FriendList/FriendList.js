import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return <ul className="friend-list">{
    friends.map(el => {
      return FriendListItem(el)
    })
    }</ul>
}
