const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} count={props.count1} />
      <Part name={props.name2} count={props.count2} />
      <Part name={props.name3} count={props.count3} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name1={part1.name} count1={part1.exercises} 
        name2={part2.name} count2={part2.exercises}
        name3={part3.name} count3={part3.exercises} />
      <Total count1={part1.exercises} count2={part2.exercises} count3={part3.exercises} />
    </div>
  )
}

export default App