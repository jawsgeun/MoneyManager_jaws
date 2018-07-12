import React, { Component } from 'react';

class Period extends Component {
    constructor(props) {
        super(props);
        this.state={
            year :'2018',
            month :'',
            day :'',
        }
    }
    
    onChange = (e)=>{
        switch(e.target.name){
            case 'period_year':
            this.setState({year:e.target.value},()=>{this.onUpdate()})
            break;
            case 'period_month': 
            this.setState({month:e.target.value},()=>{this.onUpdate()})
            break;
            case 'period_day': 
            this.setState({day:e.target.value},()=>{this.onUpdate()})
            break;
            default : break;
        }
    }
    onUpdate = () =>{
        const {year,month,day} = this.state;
        const date = year+'년'+month+'월'+day+'일';
        this.props.onChange(this.props.name,date)
    }
    render() {
        return (
            <span>
                <select name="period_year" onChange = {this.onChange}>
                        <option value="2017" >2017</option>
                        <option value="2018" >2018</option>
                    </select>
                    년
                    <select name="period_month" onChange = {this.onChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    월
                    <select name="period_day" onChange = {this.onChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    일
            </span>
        );
    }
}

export default Period;