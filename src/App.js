
import React, {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      {total > 0
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <p>No feedback given</p>}
    </div>
  );
};

const Button = props => 
  <button onClick={props.onClick}>{props.text}</button>;

const Statistics = props => {
  const total = props.good + props.neutral + props.bad;

  return (
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />      
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(props.good - props.bad) / total} />
      <StatisticLine text="positive" value={props.good / total * 100 + " %"} />
    </table>
  );
};

const StatisticLine = props =>
  <tr><td>{props.text}</td><td>{props.value}</td></tr>;

export default App;
