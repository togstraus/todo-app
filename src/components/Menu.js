import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
};

const Menu = () => (
    <ul style={style.container}> 
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/todo">TodoApp</Link>
        </li>
        <li>
            <Link to="/composition">Cards</Link>
        </li>
    </ul>

)

export default Menu;