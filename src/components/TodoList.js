import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'
import { todoProps } from '../propTypes/proptypes';

const TodoList = ({todos = [], onToggle, onDelete, onAdd }) => (
    <ul>
        {todos.map( (todo , index) =>(
            <Todo 
            key={todo.id} 
            index = {index} 
            todo={todo} 
            onToggle={onToggle}
            onDelete={onDelete}
            onAdd={onAdd}
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(todoProps),
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default TodoList;