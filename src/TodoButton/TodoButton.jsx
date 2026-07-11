

import React from 'react'

import { TodoContext } from '../TodoContext/TodoContext'
import './TodoButton.css'

function TodoButton() {
  const { setOpenModal } = React.useContext(TodoContext)

  return (
    <button className="todo-button" onClick={() => setOpenModal(true)}>
      +
    </button>
  )
}

export { TodoButton }