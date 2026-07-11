
import { TodoIcon } from "../TodoIcon/TodoIcon"
function Deletelcon({  onClick, }) {
    return (<TodoIcon type="delete"
      color ={"gray"} 
            onClick={onClick} />
    )
}
export { Deletelcon }


/*   className={className?'green':"red"} */