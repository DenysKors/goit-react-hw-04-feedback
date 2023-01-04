import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.statItem}>Good: {good}</p>
      <p className={css.statItem}>Neutral: {neutral}</p>
      <p className={css.statItem}>Bad: {bad}</p>
      <p className={css.statItem}>Total: {total}</p>
      <p className={css.statItem}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
