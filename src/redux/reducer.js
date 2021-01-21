import {
  SET_DATA,
  ADD_CHARACHTER,
  DELETE_CHARACHTER,
  EDIT_CHARACHTER,
} from './actionTypes'

const initialState = {
  data: null,
}
export const mainReducer = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload

  if (type === SET_DATA) {
    return {
      ...state,
      data: payload,
    }
  } else if (type === EDIT_CHARACHTER) {
    const { id, inputValue, raceName } = payload

    const newState = JSON.parse(JSON.stringify(state))

    newState.data
      .find((race) => race.name === raceName)
      .persons.find((ch) => ch.id === id).name = inputValue

    return newState
  } else if (type === DELETE_CHARACHTER) {
    const { id, raceName } = payload

    const newState = JSON.parse(JSON.stringify(state))

    const raceArrIndex = newState.data.findIndex(
      (race) => race.name === raceName
    )
    const personsArr = newState.data[raceArrIndex].persons
    const personIndex = personsArr.findIndex((ch) => ch.id === id)

    const newPersonsData = [
      ...personsArr.slice(0, personIndex),
      ...personsArr.slice(personIndex + 1),
    ]

    newState.data[raceArrIndex].persons = newPersonsData

    return newState
  } else if (type === ADD_CHARACHTER) {
    const { raceName, inputValue, genId } = payload
    const newPerson = {
      id: genId,
      name: inputValue,
    }
    const newState = JSON.parse(JSON.stringify(state))

    newState.data.find((race) => race.name === raceName).persons.push(newPerson)

    return newState
  } else {
    return state
  }
}
