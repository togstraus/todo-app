import React from 'react'
import Card from '../components/composition/Card';
import TodoScreen from './TodoScreen';



class CompositionPatternScreen extends React.Component{

    renderTodoApp(){
        return(
            <>
                <h2>Todo-шка</h2>
                <Card>
                    <TodoScreen/>
                </Card>                
            </>
        )
    };

    renderCard(){
        return(
            <>
                <Card>
                    <div>Содержимое карты</div>
                </Card>  
            </>
        )
    };

    render(){
        return(
            <>
                {this.renderTodoApp()},
                {this.renderCard()}   
            </>
        );
    };
};

export default CompositionPatternScreen;