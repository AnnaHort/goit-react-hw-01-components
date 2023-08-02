export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
<>
{isOnline ? <span className="online">Online</span> : <span className="offline">Offline</span>}
    <img className="avatar" src={avatar} alt="User avatar" width="48"/>
    <p className="name">{name}</p>
</>
    )
}