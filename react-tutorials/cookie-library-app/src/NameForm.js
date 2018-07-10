import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        name : this.props.name,
    }
    onClick=()=>{
        this.props.onChange(this.state.name)
    }
    onTextChange = (e)=>{
        this.setState({
            name :e.target.value,
        })
    }
    render() {
        return (
            <div>
                <input value ={this.state.name} onChange = {this.onTextChange}/>
                <button onClick = {this.onClick}>변경</button>
            </div>
        );
    }
}

export default NameForm;