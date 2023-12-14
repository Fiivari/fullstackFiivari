import { useState } from 'react'

const Filter = (props) => (
  <div>
    filter shown with <input 
      value={props.value}
      onChange={props.handler}
    />
  </div>
)

const PersonForm = (props) => (
  <form onSubmit={props.submitHandler}>
    <div>
      name: <input 
        value={props.input1val}
        onChange={props.input1handler}
      />
    </div>
    <div>
      number: <input
        value={props.input2val}
        onChange={props.input2handler}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => 
      <div key={person.name}>{person.name} {person.number}</div>
    )}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        submitHandler={addPerson}
        input1val={newName}
        input1handler={handleNameChange}
        input2val={newNumber}
        input2handler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )

}

export default App