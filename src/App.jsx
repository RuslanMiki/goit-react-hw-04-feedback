// import React, { Component } from 'react';+

import { useState } from 'react';

import Section from './components/Section';
import FedbackOptions from './components/FedbackOptions';
import Statistics from './components/Statistics';

import { nameBtn } from 'services/BtnOptions';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = label => {
    switch (label) {
      case 'good':
        setGood(prevGood => (prevGood += 1));
        break;
      case 'neutral':
        setNeutral(prevNeutral => (prevNeutral += 1));
        break;
      case 'bad':
        setBad(prevBad => (prevBad += 1));
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const precent = Math.round((good / countTotalFeedback()) * 100) || 0;
    return precent;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FedbackOptions options={nameBtn} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;
