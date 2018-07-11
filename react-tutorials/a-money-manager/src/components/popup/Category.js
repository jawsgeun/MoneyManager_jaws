import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './Popup.css'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            selection : '무엇인가요',
        }
    }
    
    onBtnClick = (e) =>{
        this.props.onSelect(e.target.value);
        this.setState({
            selection : e.target.value,
        })
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>카테고리를 선택하세요 {this.state.selection}?</h1>
                    &nbsp;<Button outline color = 'primary' onClick = {this.onBtnClick} value = "의류">의류</Button>&nbsp;
                    <Button outline color = 'success' onClick = {this.onBtnClick} value = "음식">음식</Button>&nbsp;
                    <Button outline color = 'secondary' onClick = {this.onBtnClick} value = "교통">교통</Button><br/><br/>
                    &nbsp;<Button color = 'danger' onClick={this.props.closePopup}>닫기</Button>
                </div>
            </div>
        );
    }
}

export default Category;