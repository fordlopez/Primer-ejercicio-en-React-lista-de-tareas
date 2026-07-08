
import CheckSVG from './check.svg?react'

import DeleteSVG from'./delete.svg?react'

const iconTypes={
    'Check':<CheckSVG/>,
    'Delete':<DeleteSVG/> }

    
function TodoIcon({type}){
    return (
        <span 
         className={`${type}`}>
             
             {type=="check"? <CheckSVG/>:<DeleteSVG/> }
        </span>
    )
}
export {TodoIcon}