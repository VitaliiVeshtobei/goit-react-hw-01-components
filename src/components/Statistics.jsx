import PropTypes from 'prop-types';
import { List } from './ListStyled';
import Box from './Box';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <List class="stat-list">
        <Box display="flex" justifyContent="space-evenly" alignContent="center">
          {stats.map(({ label, percentage, id }) => {
            return (
              <li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
              </li>
            );
          })}
        </Box>
      </List>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
