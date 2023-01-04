import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={styles.feedbackBtn}
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
