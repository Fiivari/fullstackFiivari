import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (person) => {
  const confirm = window.confirm(`Delete ${person.name}?`)
  if (confirm) {
    return axios.delete(`${baseUrl}/${person.id}`)
  }
}

export default { getAll, create, update, remove }