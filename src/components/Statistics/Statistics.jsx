import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <div className={styles.text}>
        {Object.keys(this.props.state).map(data => (
          <p key={data}>
            {this.props.firstLetterLarge(data)}: {this.props.state[data]}
          </p>
        ))}
        <p>Total: {this.props.total()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }

  // this.props.total = countTotalFeedback from App

  countPositiveFeedbackPercentage = () => {
    if (this.props.total() === 0) {
      return 0;
    }
    return Math.floor((this.props.state.good * 100) / this.props.total());
  };
}

Statistics.propTypes = {
  state: PropTypes.object,
};

export default Statistics;
