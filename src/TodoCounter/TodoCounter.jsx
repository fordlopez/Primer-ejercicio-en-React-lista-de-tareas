import "./TodoCounter.css";

function TodoCounter({ total, completed }) {



    if (completed === total) {
        return (

            <h1 className="todo-counter" translate="no">
                <span>terminado</span>
            </h1>
        )
    }

    return (

        <h1 className="todo-counter" translate="no">
            completados <span>{completed}</span> de <span>{total}</span> tareas
        </h1>
    )


}

export { TodoCounter }


