import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1 , title: 'Молоко', completed: false},
        {id: 2 , title: 'Сыр', completed: false},
        {id: 3 , title: 'Майонез', completed: false},
      ]
    }  
  }

  onAdd = title => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: Date.now(),
          title,
          completed: false,
        }
      ]
    }))
  };

  onDelete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  }

  onToggle = id => {
    this.setState( prevState => ({      
        todos: prevState.todos.map(todo => {
          if(todo.id === id){
            return{...todo, completed: !todo.completed}
          }
          return todo;
        })      
    }))
  };

  render(){ 
    return (
      <>
        <h1>My React Todo App</h1>
        <TodoList 
        todos={this.state.todos}
        onToggle={this.onToggle}
        onDelete={this.onDelete}
        onAdd={this.onAdd}
        />
      </>
    
    );
  }
};

export default App;
