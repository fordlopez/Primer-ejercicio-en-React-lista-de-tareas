import React from 'react'

import { TodoItem } from '../TodoItem/TodoItem'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/CompleteIcon/TodoList/TodoList'
import { TodoButton } from '../TodoButton/TodoButton'
import { EMptyTodo } from '../EMptyTodo/EMptyTodo'
import { ErrorTodo } from '../ErrorTodo/ErrorTodo'
import { LoadingTodo } from '../TodoLong/TodoLong'
import { TodoContext } from '../TodoContext/TodoContext'
import { Modal } from '../Modal/Modal'
import { TodoForm } from '../TodoForm/TodoForm'

function AppUi() {
  const { openModal } = React.useContext(TodoContext)

  return (
    <div>
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
          <>
            <TodoCounter completed={completados} total={totalTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList>
              {loading && (
                <>
                  <li><p>Cargando...</p></li>
                  <LoadingTodo />
                  <LoadingTodo />
                  <LoadingTodo />
                </>
              )}
              {error && <ErrorTodo />}
              {!loading && searchedTodos.length === 0 && <EMptyTodo />}
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.texto}
                  texto={todo.texto}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.texto)}
                  onDelete={() => deleteTodo(todo.texto)}
                />
              ))}
            </TodoList>
          </>
        )}
      </TodoContext.Consumer>

      <TodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  )
}

export { AppUi }