import React from 'react'

import { useLocalStorage } from './localStorage/localStorageItem.jsx'
import { AppUi } from './A/AppUi.jsx'
import { TodoProvider } from './assets/TodoContext/TodoContext.jsx'

import './app1.css'

/*
const defaultTodos = [
  { texto: 'cortar Cebolla', completed: false },
  { texto: 'Pasar el curso', completed: true },
  { texto: 'Llorrar con la llorona', completed: false },
  { texto: 'Limpiar', completed: false }
]
localStorage.setItem('Todos.v1', JSON.stringify(defaultTodos))
localStorage.removeItem('ToDos-2')
*/

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  )
}

export default App