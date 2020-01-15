import React from 'react';
import { todoProps } from '../propTypes/proptypes';
import PropTypes from 'prop-types'

class Todo extends React.Component {    

    onToggleHandler = () => {
        const {todo, onToggle} = this.props;
        onToggle(todo.id);
    };

    onDeleteHandler = () => {
        const {todo, onDelete} = this.props;
        onDelete(todo.id);
    };

   
    render() {
        const {index , todo} = this.props;
        const {title, completed} = todo;
        
        return (   
            <>                        
                <li>
                    <div onClick={this.onToggleHandler}>
                        <input type="checkbox" checked={completed} readOnly></input>
                        {index + 1}.
                        {' '}
                        <span>{title}</span>
                        <button onClick={this.onDeleteHandler}>Delete</button>
                    </div>                     
                </li>     
            </>              
        );        
    }
}

Todo.propTypes = {
    index: PropTypes.number.isRequired,
    todo: todoProps,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default Todo;