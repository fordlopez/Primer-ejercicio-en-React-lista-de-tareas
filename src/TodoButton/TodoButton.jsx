import "./TodoButton.css";

function TodoButton() {

    return (

        <button className="todo-button"
            onClick={(event) => {
                console.log('te diste clik')
                console.log(event)
            }}>
            +
        </button>


    )

}

export { TodoButton }
