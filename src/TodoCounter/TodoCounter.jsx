import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter({ total, completed }) {

 const {
   completados,
        totalTodos,
 } =React.useContext(TodoContext)


    if (completed === total) {
        return (

            <h1 className="todo-counter" translate="no">
                <span>terminado</span>
            </h1>
        )
    }

    return (

       

        <h1 className="todo-counter" translate="no">
            completados <span>{completados}</span> de <span>{totalTodos}</span> tareas
        </h1>
    )


}

export { TodoCounter }


