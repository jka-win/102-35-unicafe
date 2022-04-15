
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
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />      
      <Statistic text="bad" value={bad} />
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {good / total * 100} %</p>
    </div>
  );
};

const Button = props => 
  <button onClick={props.onClick}>{props.text}</button>;

const Statistic = props =>
  <p>{props.text} {props.value}</p>;

export default App;
