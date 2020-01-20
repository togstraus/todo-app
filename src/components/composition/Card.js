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
};

const Card = ({ title = 'No Name', children }) => (
    <div style={style.container}>
        <div style={style.card}>
            <h3>{title}</h3>
            {children}
        </div>
    </div>
);

export default Card;