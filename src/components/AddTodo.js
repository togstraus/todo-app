import React from "react";


class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    onAddHandler = () => {
        const {onAdd} = this.props;
        onAdd(this.state.input);
        this.setState({
            input: ''
        });
    };

    onChangeHandler(e) {
        this.setState({
            input: e.target.value
        });
    }

    render() {        
        return (
            <div>
                <input 
                type="text" 
                input={this.state.input} 
                onChange={this.onChangeHandler} 
                />
                <button onClick={this.onAddHandler}>Add</button>
            </div>            
        )
    };

}

export default AddTodo;