import { Card } from "./profile.styled";
import { MainInformationBlock, ProfileImg,UserName,UserTag,UserLocation, UserInfo, DetailInfo, InfoContent, InfoContentDetails } from "./profile.styled";
export const Profile = ({ items }) => {
  return (
    <Card>
        <MainInformationBlock>
        <ProfileImg src={items.avatar} alt= 'User avatar'></ProfileImg>
      <UserName>{items.username}</UserName>
      <UserTag>@{items.tag}</UserTag>
      <UserLocation>{items.location}</UserLocation>
        </MainInformationBlock>
   
      <UserInfo>
        <DetailInfo>
            <InfoContent>Followers</InfoContent>
            <InfoContentDetails>{items.stats.followers}</InfoContentDetails>
        </DetailInfo>
        <DetailInfo>
            <InfoContent>Views</InfoContent>
            <InfoContentDetails>{items.stats.views}</InfoContentDetails>
        </DetailInfo>
        <DetailInfo>
            <InfoContent>Likes</InfoContent>
            <InfoContentDetails>{items.stats.likes}</InfoContentDetails>
        </DetailInfo>
      </UserInfo>
    </Card>
  );
};

