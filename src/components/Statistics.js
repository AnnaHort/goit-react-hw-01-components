export const Statistics = ({ stats, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {stats.map(statistic => (
            <li key={statistic.id}>
                <span>{statistic.label}</span>
                <span>{statistic.percentage}</span>
            </li>
            
        ))}
      </ul>
    </section>
  );
};


