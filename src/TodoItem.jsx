import "./TodoItem.css"
import { CompleteIcon } from "./CompleteIcon"
import { Deletelcon } from "./Deletelcon"


function TodoItem({ texto, completed, onComplete, onDelete }) {

    return (

        <li className="todo-item">
            <CompleteIcon className={`icon-check ${completed ? 'icon-check-active' : ''}`} onClick={onComplete} />

            <p className={completed ? 'todo-item-completed' : ''}>{texto}</p>

            <Deletelcon className="icon-delete" onClick={onDelete} />

        </li>

    )

}
export { TodoItem }
