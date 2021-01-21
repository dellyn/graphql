import {
  ADD_CHARACHTER,
  DELETE_CHARACHTER,
  EDIT_CHARACHTER,
} from './actionTypes'

export const structureData = (data) => {
  data = JSON.parse(data)
  return [...new Set(data.map(({ race }) => race))].map((category, idx) => ({
    id: idx + 1,
    name: category,
    persons: data
      .filter(({ race }) => race === category)
      .map(({ name }, idx) => ({ id: idx + 1, name })),
  }))
}

export const deleteItem = (data) => {
  return { type: DELETE_CHARACHTER, payload: data }
}

export const editItem = (data) => {
  return { type: EDIT_CHARACHTER, payload: data }
}

export const addItem = (data) => {
  return { type: ADD_CHARACHTER, payload: data }
}
