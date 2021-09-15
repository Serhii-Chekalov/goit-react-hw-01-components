import PropTypes from 'prop-types';
import styled from './Statistics.module.css';
import getRandomHexColor from './getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styled.statistics}>
      <h2 className={styled.title}>{title}</h2>

      <ul className={styled.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styled.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styled.label}>{label}</span>
            <span className={styled.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
