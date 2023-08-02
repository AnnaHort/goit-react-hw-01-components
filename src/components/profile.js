export const Profile = ({ items }) => {
  return (
    <div>
        <div>
        <img src={items.avatar} alt= 'User avatar'></img>
      <p>{items.username}</p>
      <p>@{items.tag}</p>
      <p>{items.location}</p>
        </div>
   
      <ul>
        <li>
            <span>Followers</span>
            <span>{items.stats.followers}</span>
        </li>
        <li>
            <span>Views</span>
            <span>{items.stats.views}</span>
        </li>
        <li>
            <span>Likes</span>
            <span>{items.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

