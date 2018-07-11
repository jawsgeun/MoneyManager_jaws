import React, { Component } from 'react';
import { Button, Form, Label, Input} from 'reactstrap';
import './InputForm.css'
import AmountChaser from '../components/AmountChaser';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ItemList from '../components/ItemList';
import Category from '../components/popup/Category';


class InputForm extends Component {
    id;
    constructor(props){
        super(props);
        const date = new Date();
        const today =  date.getFullYear() + "년" + 
                      (date.getMonth()+1) + "월" + 
                       date.getDate()+"일";
        const localDatas = JSON.parse(localStorage.getItem(today));
        this.state = {
            amount : '',
            isIncome : '',
            isCash : '',
            detail : '',
            category : '카테고리 선택',
            items : localDatas || [],
            chaser : '',
            dropdownOpen : false,
            dropdownTitle : '선택하세요',
            incomeBtnSize : 'sm',
            outcomeBtnSize : 'sm',
            date : today,
            popup : false,
            doUpdate : true,
        }
        if(localStorage[this.state.date]===undefined){
            this.id=0;
        }else{
            this.id = Object.keys(localDatas).length;
        }
    }
    onSubmit = () =>{
        localStorage[this.state.date] = JSON.stringify(this.state.items);
    }
    checkValid=()=>{
        const {amount,isIncome,isCash,detail,category} = this.state;
        if(!amount){
            alert('금액을 입력하세요!')
        }else if(isIncome===''){
            alert('수입과 지출 중 한 가지를 선택하세요!')
        }else if(isCash===''){
            alert('카드와 현금 중 한 가지를 선택하세요!')
        }else if(detail===''){
            alert('상세 정보를 입력하세요!')
        }else if(category ==='카테고리 선택'){
            alert('카테고리 정보를 입력하세요!')
        }else{
            return true;
        }
        return false;
    }
    onAmountChange = (e)=>{
        let chaser;
        if(e.target.value){
            chaser = Number(e.target.value).toLocaleString('en')+"원";
        }
        this.setState({
            chaser : chaser,
            amount : e.target.value
        })
    }
    onDetailChange = (e)=>{
        this.setState({
            detail : e.target.value
        })
    }
    onRemove = (id) =>{
        const {items} = this.state;
        this.setState({
            items : items.filter(items => items.id !== id)
        });
    }
    onBtnClick = (e)=>{
        this.setState({
            isIncome : e.target.id==='income'?true:false,
            incomeBtnSize : e.target.id==='income'?'':'sm',
            outcomeBtnSize : e.target.id==='income'?'sm':'',
        })
    }
    onDropDownToggle = () =>{
        this.setState(prevState =>({
            dropdownOpen : !prevState.dropdownOpen
        }))
    }
    onDropDownClick = (e) =>{
        this.setState({
            dropdownTitle : e.target.id ==='card'?'카드':'현금',
            isCash : e.target.id ==='card'?false:true
        })
    }
    onCancle=()=>{
        this.setState({
            amount : '',
            chaser : '',
            detail : '',
            dropdownTitle :'선택하세요',
            isCash : '',
            isIncome : '',
            incomeBtnSize : 'sm',
            outcomeBtnSize : 'sm',
            category : '카테고리 선택',
        })
    }
    onRegister =()=>{
        const{items,amount,detail,isCash,isIncome,category} = this.state;
        if(this.checkValid()){
            this.setState({
                items : items.concat({
                    id:this.id++,
                    amount : amount,
                    detail : detail,
                    isCash : isCash,
                    isIncome : isIncome,
                    category : category,
                })
            })
            this.onCancle();
        }
    }
    onKeyPress = (e)=>{
        if(e.key ==='Enter'){
          this.onRegister();
        }
      }
    onDateChange = (e) =>{
        this.setState({
            date : e.target.value
        })
    }
    onRefreshDate = ()=>{
        this.setState({
            items : JSON.parse(localStorage.getItem(this.inputDate.value)) || []
        })
    }
    onCategoryClick = ()=>{
        this.setState((prevState)=>({
            popup : !prevState.popup,
        }))
    }
    onCategorySelect = (val) =>{
        this.setState({
            category: val,
        })
    }
    render() {
        const {items,chaser, amount, detail, dropdownOpen,dropdownTitle
                ,date,incomeBtnSize,outcomeBtnSize,popup,category} = this.state;
        const style = {
            display : 'inline',
        };
        return (
            <div className="docs-example">
            <h1><input type="text" value = {date} onChange = {this.onDateChange} ref = {ref=>this.inputDate = ref}/>
            <Button color="primary" onClick ={this.onRefreshDate}>날짜 조회</Button></h1>
                <Form>    
                    <Label>금액</Label>&nbsp;&nbsp;&nbsp;
                    <Button id ='income' color="success" size = {incomeBtnSize} onClick = {this.onBtnClick}>수입</Button>&nbsp;
                    <Button id ='outcome'color="info" size = {outcomeBtnSize} onClick = {this.onBtnClick}>지출</Button>
                    <Input  type="number"
                            value={amount}
                            placeholder="금액을 입력하세요."
                            onChange = {this.onAmountChange}/>
                    <AmountChaser chaser ={chaser}/>
                    <Dropdown isOpen={dropdownOpen} toggle={this.onDropDownToggle} style = {style}>
                    <DropdownToggle caret>
                        {dropdownTitle}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem id ='cash' onClick ={this.onDropDownClick}>현금</DropdownItem>
                        <DropdownItem id ='card' onClick ={this.onDropDownClick}>카드</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>&nbsp;
                    <Button id ='category' color="warning" onClick = {this.onCategoryClick}>{category}</Button><br/>
                    <Label>상세 정보</Label>
                    <Input  type="text" 
                            value={detail}
                            placeholder="상세 내용을 입력하세요"
                            onChange={this.onDetailChange}
                            onKeyPress={this.onKeyPress}
                            />
                    <hr/>
                    <Button onClick ={this.onRegister} color="primary" size = 'lg'>등록</Button>&nbsp;&nbsp;
                    <Button onClick ={this.onCancle} color="danger" size = 'lg' >취소</Button>
                </Form>
                <ItemList items={items} onRemove = {this.onRemove} onSubmit = {this.onSubmit}/>
                <Button color="success" size = 'lg' onClick = {this.onSubmit}block>기록 하기</Button>
                {popup ? 
                    <Category
                        onSelect = {this.onCategorySelect}
                        closePopup={this.onCategoryClick}
                        />
                        : null
                }
            </div>
        );
    }
}

export default InputForm;