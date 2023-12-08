const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.count1 + props.count2 + props.count3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={part1} count={exercises1} />
      <Content name={part2} count={exercises2} />
      <Content name={part3} count={exercises3} />
      <Total count1={exercises1} count2={exercises2} count3={exercises3} />
    </div>
  )
}

export default App