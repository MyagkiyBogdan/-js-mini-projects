import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import React, { Component } from 'react';
import Section from './Section';
import Notification from './Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreaseStats = data => {
    this.setState(prevState => {
      return { [data]: prevState[data] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, data) => {
      return total + data;
    }, 0);
  };

  firstLetterLarge = string => {
    if (!string) {
      return;
    }

    const splitedType = string.split('');
    const firstLetter = splitedType[0].toUpperCase();
    const typeCopy = [...splitedType];
    typeCopy.splice(0, 1);
    const result = [firstLetter, ...typeCopy].join('');
    return result;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncreaseStats}
            firstLetterLarge={this.firstLetterLarge}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback}
              firstLetterLarge={this.firstLetterLarge}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
