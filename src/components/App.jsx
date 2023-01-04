import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const manualAdd = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const stateValues = [good, neutral, bad];

    return stateValues.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalValue = countTotalFeedback();

    return Math.round((100 * good) / totalValue);
  };

  const options = ['good', 'neutral', 'bad'];

  const totalQuantity = countTotalFeedback();
  let statistics;

  if (totalQuantity === 0) {
    statistics = <Notification message="There is no feedback" />;
  } else {
    statistics = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    );
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={manualAdd} />
      </Section>
      <Section title="Statistics">{statistics}</Section>
    </>
  );
}
