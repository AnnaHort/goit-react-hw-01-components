import { Section, Title, List, ListItem, getRandomColor } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {stats.map(statistic => (
            <ListItem key={statistic.id} backgroundColor={getRandomColor()}>
                <span>{statistic.label}</span>
                <span>{statistic.percentage}</span>
            </ListItem>
            
        ))}
      </List>
    </Section>
  );
};


