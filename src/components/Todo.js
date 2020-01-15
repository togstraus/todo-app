import React from 'react';

class Todo extends React.Component {    

    onToggleHandler = () => {
        const {todo, onToggle} = this.props;
        onToggle(todo.id);
    }

    render() {
        const {index , todo} = this.props;
        const {title, completed} = todo;

        return (            
            <li>
                <div onClick={this.onToggleHandler}>
                    <input type="checkbox" checked={completed} readOnly></input>
                    {index + 1}.
                    {' '}
                    <span>{title}</span>
                </div> 
            </li>                   
        );
    }
}

export default Todo;