import { FriendListItem } from './FriendListItem';
import { ListItem,List } from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <List>
    {friends.map(friend => (
        <ListItem key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ListItem>
      ))}
    </List>
  );
};


