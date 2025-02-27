
const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {

  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}



const Content = (props) => {

  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {

  const total = props.exercises1 + props.exercises2 + props.exercises3

  return (
    <p>Number of excersizes: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application development'
  const part1 = 'Fundatmentas of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )




}
export default App;
