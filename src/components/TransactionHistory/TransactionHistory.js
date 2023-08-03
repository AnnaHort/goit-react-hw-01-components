import { Table,Thead, TrHead, ThHead, Tbody, TbodyTr, TbodyTd} from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
  return (
    <Table>
<Thead>
<TrHead>
      <ThHead>Type</ThHead>
      <ThHead>Amount</ThHead>
      <ThHead>Currency</ThHead>
    </TrHead>
</Thead>
<Tbody>
    {items.map((item,index) => (
        <TbodyTr key={item.id} $even={index % 2 === 0}>
        <TbodyTd>{item.type}</TbodyTd>
        <TbodyTd>{item.amount}</TbodyTd>
        <TbodyTd>{item.currency}</TbodyTd>
      </TbodyTr>
    ))}
  </Tbody>
    </Table>
  );
};

