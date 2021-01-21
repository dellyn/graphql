import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, editItem, addItem } from '../../redux/actionСreators'
import Charachter from '../Charachter/Charachter'

const Race = ({ race, genId }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const deleteCharachter = (data) => {
    dispatch(deleteItem(data))
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  const addCharachter = (name) => {
    if (isEdit && inputValue.length) {
      const data = {
        inputValue,
        raceName: name,
        genId: genId++,
      }
      dispatch(addItem(data))
      setInputValue('')
    }
    setIsEdit(!isEdit)
  }

  const editCharachter = (data) => {
    dispatch(editItem(data))
  }
  return (
    <div className="column" key={race.id}>
      <div className="race">{race.name}</div>

      {race.persons.map((charachter) => {
        return (
          <Charachter
            key={charachter.id}
            raceName={race.name}
            charachter={charachter}
            editCharachter={editCharachter}
            deleteCharachter={deleteCharachter}
          />
        )
      })}

      <div className="d-flex">
        {isEdit && <input onChange={handleInput} />}
        <button className="add-btn" onClick={() => addCharachter(race.name)}>
          {isEdit ? 'Save' : 'Add'}
        </button>
      </div>
    </div>
  )
}

export default Race
