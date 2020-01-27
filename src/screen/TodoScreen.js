import React from 'react'
import TodoList from '../components/todo/TodoList';
import AddTodo from '../components/todo/AddTodo';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  setLoading,
} 
from '../actions/todoActions'

class TodoScreen extends React.Component{
  render(){     
    //const { todos, loading } = this.state;
    const { todos, loading, deleteTodo, toggleComplete, addTodo } = this.props; 
    return (
      <>
        <h1>My React Todo App</h1>
        <AddTodo
            onAdd={addTodo}
        />
        {loading ? (
            <span>Loading...</span>
            ) : todos.length !== 0 ? (
            <TodoList 
                todos={todos}
                onToggle={toggleComplete}
                onDelete={deleteTodo}            
            />
            ) : ( <span>Дела кончились :(</span>)
        }        
      </>        
    );
  };
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
  loading: state.todo.loading,
});

const mapDispatchToProps = ({
  addTodo,
  deleteTodo,
  toggleComplete,
  setLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);