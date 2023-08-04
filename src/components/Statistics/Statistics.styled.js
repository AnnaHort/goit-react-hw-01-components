import styled from 'styled-components';

export const Section = styled.section`
margin-top: 80px;
margin-right: auto;
margin-left: auto;
  text-align: center;
  width: 500px;
  border: 1px solid black;

`

export const List = styled.ul`
  height: 50px;
  display: flex;
  justify-content: space-around;
  flex: 1;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
background-color: ${props => props.color};
`


