import React from 'react'

import './TodoForm.css'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoForm() {

  const { setOpenModal, addTodo } = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSave = () => {
    if (!newTodoValue.trim()) return
    addTodo(newTodoValue)
    setOpenModal(false)

/* const concaode=()=>{
  event.preventDefault();
  setOpenMadae(false)}
 */

/*  const onChange =(event)=>{
    setNewTodoValue(event.target.value)
  }
 */
  
  }

  return (
    <div className="TodoForm">
      <h2>Crear nueva tarea</h2>

      <textarea
        className="TodoForm-textarea"
        placeholder="Escribe tu nueva tarea..."
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
      />

      <div className="TodoForm-buttons">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-save"
          onClick={onSave}
        >
          Guardar
        </button>
      </div>
    </div>
  )
}

export { TodoForm }