import "./TodoCounter.css";

function TodoCounter({ total, completed }) {

    if (completed == total) {
        return (

            <h1 className="todo-counter">
                <span>terminado</span>
            </h1>
        )

    } else {
        return (

            <h1 className="todo-counter">
                completados <span>{completed}</span> de <span>{total}</span> tareas
            </h1>
        )

    }


}

export { TodoCounter }


