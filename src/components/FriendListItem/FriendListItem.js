export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className="item" key={id}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
