import CheckSVG from './check.svg?react';
import DeleteSVG from './delete.svg?react';

const iconTypes = {
      'check':(color)=><CheckSVG width={40}  className="check" fill={color}/>,
    'delete':(color)=><DeleteSVG width={40}  className="delete" fill={color}/>,
};

function TodoIcon({ type, onClick ,color}) {
    console.log(color)
    return (
        <span onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };


