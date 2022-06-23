import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
  const renderArr = stats.map(item => (
    <li
      key={item.id}
      className={s.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>{renderArr}</ul>
    </section>
  );
}
export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
