import styled from 'styled-components';

export const Section = styled.section`
margin-right: auto;
margin-left: auto;
margin-top: 80px;
width: 400px;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h2`
border: 1px solid;
padding: 16px 110px;
border-bottom: 0;
font-size: 24px;
font-weight: bold;
`

export const List = styled.ul`
display: flex;
`

// Функція для генерації рандомного HEX-коду кольору
export const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

export const ListItem = styled.li`
padding: 12px;
border: 1px solid;
background-color: ${props => props.backgroundColor};
`


