import styled from 'styled-components';

export const Card = styled.div`
margin-right: auto;
margin-left: auto;
border: thick double grey;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
width: 300px;
`

export const MainInformationBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

` 

export const ProfileImg = styled.img`
width: 200px;
height: 100%;
padding: 16px;
`
export const UserName = styled.p`
font-size: 24px;
color: black;
font-weight: bold;
margin-bottom: 8px;
` 

export const UserTag = styled.p`
font-size: 16px;
font-weight: bold;
color: gray;
margin-bottom: 8px;
opacity: 0.5;
`

export const UserLocation = styled.p`
font-size: 18px;
font-weight: bold;
color: gray;
opacity: 0.5;
`

export const UserInfo = styled.ul`
display: flex;
padding: 8px;
gap: 34px;
`

export const DetailInfo = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const InfoContent = styled.span`
font-size: 18px;
font-weight: bold;
opacity: 0.6;
`

export const InfoContentDetails = styled.span`
font-weight: bold;
font-size: 18px;
`