
import { TodoIcon } from "../TodoIcon/TodoIcon"
function CompleteIcon({  onClick , complete}) {
    return (
        <TodoIcon type="check"
            
            color ={complete==true?"green":"gray"}
            onClick={onClick} />
    )

}
export { CompleteIcon }