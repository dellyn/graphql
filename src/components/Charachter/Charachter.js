import React, { useState } from 'react'

const Charachter = ({
  charachter,
  raceName,
  deleteCharachter,
  editCharachter,
}) => {
  const { name, id } = charachter
  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState(name)

  const handleEdit = () => {
    if (isEdit && inputValue.length) {
      const data = {
        id,
        raceName,
        inputValue,
      }

      editCharachter(data)
    }
    setIsEdit(!isEdit)
  }
  const handleDelete = () => {
    const data = {
      id,
      raceName,
    }
    deleteCharachter(data)
  }
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="character">
      <img src="https://via.placeholder.com/30" className="placeholder" />

      {isEdit ? (
        <input placeholder={inputValue} onChange={handleInput} />
      ) : (
        <div className="name">
          <p>{name}</p>
        </div>
      )}

      <button className="edit-btn" onClick={handleEdit}>
        <i className="fas fa-edit"></i>
      </button>

      <button className="delete-btn" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}

export default Charachter
