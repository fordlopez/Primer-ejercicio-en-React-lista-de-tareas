 import "./TodoItem.css"  
import  {CompleteIcon} from"./CompleteIcon"
import  {Deletelcon} from "./Deletelcon"


function TodoItem(prons){

    return(

        <li className="todo-item">
            <CompleteIcon  className='icon-check' onClick={ prons.onComplete}/>
            

            <p>{prons.texto}</p>

   
            <Deletelcon  className="icon-delete" onClick={
                prons.onDilit
            }/>

        </li>

    )

}
export {TodoItem}