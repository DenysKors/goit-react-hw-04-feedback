import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  manualAdd = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);

    return stateValues.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalValue = this.countTotalFeedback();

    return Math.round((100 * this.state.good) / totalValue);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const totalQuantity = this.countTotalFeedback();
    let statistics;

    if (totalQuantity === 0) {
      statistics = <Notification message="There is no feedback" />;
    } else {
      statistics = (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      );
    }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.manualAdd} />
        </Section>
        <Section title="Statistics">{statistics}</Section>
      </>
    );
  }
}
