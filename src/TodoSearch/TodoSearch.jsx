/* import React, { useState } from "react";
 */
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";
import React from "react";

function TodoSearch() {


     const {
 searchValue,
 setSearchValue
 } =React.useContext(TodoContext)



    return (
        <input
            className="todo-search"
            placeholder="Buscar tarea..."
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }