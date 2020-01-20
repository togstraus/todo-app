import React from 'react'

const style = {
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    card: {
        background: 'purple',
        padding: 30,
        borderRadius: 3,
        boxShadow: '4px 4px 15px #9e9e9e',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}

class CompositionPatternScreen extends React.Component{

    
    render(){
        return(
            <div style={style.container}>
                <div style={style.card}>
                    <h3>Заголовок</h3>
                    <div>Содержимое</div>
                </div>
            </div>
        );
    }
};

export default CompositionPatternScreen;