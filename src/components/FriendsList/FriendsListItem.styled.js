import styled from 'styled-components';


export const UserState = styled.span`
padding: 8px;
background-color: ${props => (props.type === 'online' ? 'green' : 'red')};
border-radius: 50%;
margin-right: 16px;
margin-left: 16px;
`

export const Avatar = styled.img`
padding: 8px;
width: 112px;
border-radius: 5px;
margin-right: 16px;
border: 1px solid rgba(0, 0 ,0, 0.2);
border-radius: 50%;
`

export const UserName = styled.p`
font-size: 24px;
font-weight: bold;
`