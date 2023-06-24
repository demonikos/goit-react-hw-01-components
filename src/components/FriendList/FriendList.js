import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

export default function FriendList({ friends }) {
  return <ul className={css.friendList}>{
    friends.map(el => {
      return FriendListItem(el)
    })
    }</ul>
}
