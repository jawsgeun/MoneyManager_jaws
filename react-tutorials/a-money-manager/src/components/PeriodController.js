import React, { Component } from 'react';
import Period from './Period';

class PeriodController extends Component {
    state = {
        from :'',
        to :'',
    }
    onClick = () =>{
        const {onChange} = this.props;
        const {from,to}=this.state;
        onChange(from,to)
    }
    onChange = (name,data) =>{
        if(name ==='from'){
            this.setState({
                from : data,
            })
        }else{
            this.setState({
                to : data,
        })
        }
    }
    render() {
        return (
            <div>
                &nbsp;&nbsp;<Period name ='from' onChange = {this.onChange}/> 부터&nbsp;&nbsp;&nbsp;
                <Period name ='to' onChange={this.onChange} /> 까지&nbsp;
                <button onClick = {this.onClick}>조회</button>
            </div>
        );
    }
}

export default PeriodController;