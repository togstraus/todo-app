import { TODO_ACTIONS } from '../actions/constants'

const initialState = {
    todos: [
        {id: 1 , title: 'Молоко', completed: false},
        {id: 2 , title: 'Сыр', completed: false},
        {id: 3 , title: 'Майонез', completed: false},
      ],
      loading: false,
};

function todoReducer(state = initialState, {type, payload}){
    switch(type){
        case TODO_ACTIONS.ADD_TODO: {
            const { title } = payload;
            return{
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title,
                        completed: false,
                    }
                ]
            }
        }

        case TODO_ACTIONS.DELETE_TODO: {
            const { id } = payload;
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== id),
            }
        }

        case TODO_ACTIONS.TOGGLE_COMPLETE: {
            const { id } = payload;
            return{
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === id){
                      return{...todo, completed: !todo.completed}
                    }
                    return todo;
                  })      
            }
        }

        case TODO_ACTIONS.SER_LOADING: {
            const { state } = payload;
            return{
                ...state,
                loading: state, 
            }
        }

        default: {
            return state;
        }
    }
}

export default todoReducer;