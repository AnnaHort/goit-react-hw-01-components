import { Section, List, ListItem, getRandomColor} from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(statistic => (
            <ListItem key={statistic.id} color={getRandomColor()}>
                <span>{statistic.label}</span>
                <span>{statistic.percentage}</span>
            </ListItem>
            
        ))}
      </List>
    </Section>
  );
};


