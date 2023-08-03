import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  /* padding: 16px; */
  width: 500px;

`;
export const Thead = styled.thead`
  width: 100%;
`;

export const TrHead = styled.tr`
  display: flex;
  justify-content: space-around;
`;

export const ThHead = styled.th`
  width: 35%;
  padding: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
  background-color: lightblue;
`;

export const Tbody = styled.tbody`
  width: 100%;
  display: flex;
    flex-direction: column;
    padding: 8px 0;
    gap: 8px;
`;

export const TbodyTr = styled.tr`
 width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: ${props => (props.$even ? '#ffffff' : '#f0f0f0')};
 
`;

export const TbodyTd = styled.td`
  width: 33%;
  padding: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
`
