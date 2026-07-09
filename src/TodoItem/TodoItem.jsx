import "./TodoItem.css"
import { CompleteIcon } from "../CompleteIcon/CompleteIcon"
import { Deletelcon } from "../Deletelcon/Deletelcon"


function TodoItem({ texto, completed, onComplete, onDelete }) {

    return (

        <li className="todo-item">
            <CompleteIcon complete={completed} onClick={onComplete} />

            <p className={completed ? 'todo-item-completed' : ''}>{texto}</p>

            <Deletelcon  onClick={onDelete} />

        </li>

    )

}
export { TodoItem }
