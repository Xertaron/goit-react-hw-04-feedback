import data from './Stats.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={data.list}>
      <li className={data.item}>Good: {good}</li>
      <li className={data.item}>Neutral: {neutral}</li>
      <li className={data.item}>Bad: {bad}</li>
      <li className={data.item}>Total: {total}</li>
      <li className={data.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
