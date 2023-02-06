import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(btnName => {
        return (
          <li className={styles.item} key={btnName}>
            <button
              className={styles.button}
              type="button"
              onClick={({ target }) => onLeaveFeedback(target.textContent)}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// onClick={event => {
//                 const label = event.target.textContent;
//                 onLeaveFeedback(label);
//               }}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
