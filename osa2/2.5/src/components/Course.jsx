const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0);
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }

export default Course