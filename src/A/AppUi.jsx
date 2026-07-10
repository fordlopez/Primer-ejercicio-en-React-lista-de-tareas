import { TodoItem } from '../TodoItem/TodoItem'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/CompleteIcon/TodoList/TodoList'
import { TodoButton } from '../TodoButton/TodoButton'
import { EMptyTodo } from '../EMptyTodo/EMptyTodo'
import { ErrorTodo } from '../ErrorTodo/ErrorTodo'
import { LoadingTodo } from '../TodoLong/TodoLong'
import React from 'react'
import { TodoContext } from '../assets/TodoContext/TodoContext'
function AppUi({
     loading,
    error,
    completados,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo, 
}) {
  return (

    <div className='center' translate='no'>

      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({
  loading,
    error,
    completados,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo, 

        }) => (



          <TodoList>
            {loading && (
              <>
                <LoadingTodo />
                <LoadingTodo />
                <LoadingTodo />
              </>
            )}

            {erro && <ErrorTodo />}

            {!loading && searchedTodos.length === 0 && (
              <>
                <EMptyTodo />
                <p>¡Crea tu primer todo!</p>
              </>
            )}

            {!loading &&
              !erro &&
              searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.texto}
                  texto={todo.texto}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.texto)}
                  onDelete={() => deleteTodo(todo.texto)}
                />
              ))}
          </TodoList>
        )}
      </TodoContext.Consumer >

      <TodoButton />

    </div>
  )

}

export { AppUi }



import React from 'react'

import { TodoItem } from '../TodoItem/TodoItem'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/CompleteIcon/TodoList/TodoList'
import { TodoButton } from '../TodoButton/TodoButton'

import { EMptyTodo } from '../EMptyTodo/EMptyTodo'
import { ErrorTodo } from '../ErrorTodo/ErrorTodo'
import { LoadingTodo } from '../TodoLong/TodoLong'

import { TodoContext } from '../assets/TodoContext/TodoContext'

function AppUi() {
  const {
/*     loading,
    error,
    completados,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo, */
  } = React.useContext(TodoContext)

  return (
    <div className='center' translate='no'>
      <TodoCounter completed={completados} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && (
          <>
            <LoadingTodo />
            <LoadingTodo />
            <LoadingTodo />
          </>
        )}

        {error && <ErrorTodo />}

        {!loading && searchedTodos.length === 0 && (
          <>
            <EMptyTodo />
            <p>¡Crea tu primer todo!</p>
          </>
        )}

        {!loading &&
          !error &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.texto}
              texto={todo.texto}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.texto)}
              onDelete={() => deleteTodo(todo.texto)}
            />
          ))}
      </TodoList>

      <TodoButton />
    </div>
  )
}

export { AppUi }



