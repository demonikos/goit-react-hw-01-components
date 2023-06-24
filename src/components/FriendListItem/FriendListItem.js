import css from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.friendItem} key={id}>
      {isOnline === true ? (
        <span
          className={css.status}
          style={{ backgroundColor: '#25fa7e' }}
        ></span>
      ) : (
        <span 
          className={css.status} 
          style={{ backgroundColor: '#fa5732' }}
        ></span>
      )}

      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
