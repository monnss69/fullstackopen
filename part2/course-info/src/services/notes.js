import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteNote = (id) => {
  const confirmed = window.confirm(`Delete note with id ${id}?`)
  if(!confirmed) {
    return Promise.reject("Delete cancelled")
  } else {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }
}

export default { getAll, create, update, deleteNote }