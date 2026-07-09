
import { TodoIcon } from "./TodoIcon"
function CompleteIcon({ className, onClick }) {
    return (
        <TodoIcon type="check"
            className={className}
            onClick={onClick} />
    )

}
export { CompleteIcon }