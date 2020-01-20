import React from 'react'
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

class TodoScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          todos: [],
          loading: true,
        }  
      }
    
      componentDidMount(){
        setTimeout(() => this.setState({
          todos: [
            {id: 1 , title: 'Молоко', completed: false},
            {id: 2 , title: 'Сыр', completed: false},
            {id: 3 , title: 'Майонез', completed: false},
          ],
          loading: false,
        }), 3000);
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
    
        const { todos, loading } = this.state;
    
        return (
          <>
            <h1>My React Todo App</h1>
            <AddTodo
                onAdd={this.onAdd}
            />
            {loading ? (
                <span>Loading...</span>
                ) : todos.length !== 0 ? (
                <TodoList 
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                    onDelete={this.onDelete}            
                />
                ) : ( <span>Дела кончились :(</span>)
            }        
          </>
        
        );
      }
}

export default TodoScreen;