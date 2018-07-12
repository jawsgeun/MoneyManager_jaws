import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Button} from 'reactstrap';
import './Popup.css';
class CalendarPopup extends Component {
    constructor(props) {
        super(props);
        const {selectedDate} = this.props;
        this.state = {
            selected : this.dateFormatter(selectedDate),
            date : selectedDate,
        }
    }
    dateFormatter = (date) =>{
        const convertedDate =  date.getFullYear() + "년" + 
        (date.getMonth()+1) + "월" + 
         date.getDate()+"일";
        return convertedDate;
    }
    
    onChange = date => this.setState({
        selected : this.dateFormatter(date),
        date : date})
    onSubmit = ()=>{
        const {date, selected} = this.state;
        this.props.onSubmit(date,selected);
    }
    render() {
        return (
            <div className='popup'>
            <div className='popup_inner'>
                <h1>조회하실 날짜를 선택하세요</h1>
                <Calendar
                    calendarType = 'US'
                    onChange = {this.onChange}
                    value ={this.state.date}/>
                <h1>{this.state.selected}</h1>
                <Button color='success' onClick={this.onSubmit}>완료</Button>
            </div>
            </div>
        );
    }
}

export default CalendarPopup;