import { Avatar,UserName,UserState } from "./FriendsListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
<>
{isOnline ? <UserState type ="online"></UserState> : <UserState type ="ofline"></UserState>}
    <Avatar src={avatar} alt="User avatar" width="48"/>
    <UserName>{name}</UserName>
</>
    )
}