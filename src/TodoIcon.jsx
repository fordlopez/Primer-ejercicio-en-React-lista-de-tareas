import CheckSVG from './check.svg?react';
import DeleteSVG from './delete.svg?react';

const iconTypes = {
    check: <CheckSVG />,
    delete: <DeleteSVG />,
};

function TodoIcon({ type, className, onClick }) {
    return (
        <span className={`${type} ${className || ''}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };