import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef();

    state = {
        name :'',
        phone:'',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    submit = (e)=>{
        e.preventDefault();
        this.props.func(this.state);
        this.setState({
            name: '',
            phone: ''
          })
      this.input.current.focus();
    }
    render() {
        return (
        <form onSubmit = {this.submit}>
            <input
                name = "name"
                placeHolder = "이름"
                onChange = {this.handleChange}
                value = {this.state.name}
                ref = {this.input}
            />
            <br/>
            <input
                name = "phone"
                placeHolder = "전화번호"
                onChange = {this.handleChange}
                value = {this.state.phone}
            />
            <br/><br/><br/>
            이름은 {this.state.name} <br/>
            번호는 {this.state.phone}<br/>
            <button type="submit">등록</button>
        </form>
        );
    }
}

export default PhoneForm;