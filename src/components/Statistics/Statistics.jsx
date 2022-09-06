import PropTypes from 'prop-types';
import {
  SectionStatistics,
  TitleStat,
  StaticList,
  StaticSpanLabel,
  StaticSpanPerc,
  StaticItem,
} from './StatisticsStyled';

export default function Statistics({ title, stats }) {
  return (
    <SectionStatistics>
      <TitleStat>{title}</TitleStat>

      <StaticList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StaticItem key={id}>
              <StaticSpanLabel>{label}</StaticSpanLabel>
              <StaticSpanPerc>{percentage}%</StaticSpanPerc>
            </StaticItem>
          );
        })}
      </StaticList>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
