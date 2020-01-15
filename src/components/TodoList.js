import React from 'react';
import Todo from './Todo';

const TodoList = ({todos = [], onToggle }) => (
    <ul>
        {todos.map( (todo , index) =>(
            <Todo key={todo.id} index = {index} todo={todo} onToggle/>
        ))}
    </ul>
);

export default TodoList;