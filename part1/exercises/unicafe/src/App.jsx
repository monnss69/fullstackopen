import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>
          No feedback given
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <p>average {(good - bad) / (good + neutral + bad)}</p>
          <p>positive {good / (good + neutral + bad) * 100} %</p>
        </div>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
        <div>
          <button onClick={() => setGood(good + 1)}>good</button>
          <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
          <button onClick={() => setBad(bad + 1)}>bad</button>
        </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App