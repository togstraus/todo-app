import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: [
        {d: 1 , title: 'Молоко', completed: false},
        {id: 2 , title: 'Сыр', completed: false},
        { id: 3 , title: 'Майонез', completed: false},
      ]
    }  
  }

  onToggle = id => {
    this.setState( prevState => {
      return{
        todos: prevState.todos.map(todo => {
          if(todo.id === id){
            return{...todo, completed: !todo.completed}
          }
          return todo;
        })
      }
    })
  }  

  render(){ 
    return (
      <>
        <h1>My React Todo App</h1>
        <TodoList 
        todos={this.state.todos}
        onToggle={this.onToggle}
        />
      </>
    
    );
  }
}

export default App;
