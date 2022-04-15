
import React, {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = props => 
  <button onClick={props.onClick}>{props.text}</button>;

const Statistics = props => {
  const total = props.good + props.neutral + props.bad;

  return (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />      
      <Statistic text="bad" value={props.bad} />
      <p>all {total}</p>
      <p>average {(props.good - props.bad) / total}</p>
      <p>positive {props.good / total * 100} %</p>
    </div>
  );
};

const Statistic = props =>
  <p>{props.text} {props.value}</p>;

export default App;
