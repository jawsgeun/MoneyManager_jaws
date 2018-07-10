import React, { Component } from 'react';
import { Button, Form, Label, Input} from 'reactstrap';
import './InputForm.css'
import AmountChaser from '../components/AmountChaser';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ItemList from '../components/ItemList';
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';


class InputForm extends Component {
    // static propTypes = {
    //     cookies: instanceOf(Cookies).isRequired
    // };
    id;
    constructor(props){
        super(props);
        const date = new Date();
        const today =  date.getFullYear() + "년" + 
                      (date.getMonth()+1) + "월" + 
                       date.getDate()+"일";
        const localDatas = JSON.parse(localStorage.getItem(today));
        // const { cookies } = props;
        // const cookieDatas = cookies.get('datas');
        // console.log(typeof cookieDatas); // 오브젝트 타입
        this.state = {
            amount : '',
            isIncome : '',
            isCash : '',
            detail : '',
            items : localDatas || [],
            chaser : '',
            dropdownOpen : false,
            dropdownTitle : '선택하세요',
            incomeBtnSize : 'sm',
            outcomeBtnSize : 'sm',
            date : today,
            // cookieDatas : cookieDatas,
        }
        if(localStorage[this.state.date]===undefined){
            this.id=0;
        }else{
            this.id = Object.keys(localDatas).length;
        }
        // const currentCookie = this.state.cookieDatas[this.state.date];
        // this.id =currentCookie?currentCookie.id : 0;
        // console.log("id : "+this.id);
    }
    onSubmit = () =>{
        localStorage[this.state.date] = JSON.stringify(this.state.items);
    }
    // setCookie = ()=>{
    //     const {date,items,cookieDatas} = this.state;
    //     const { cookies } = this.props;
    //     let tmpCookie = {}
    //     tmpCookie[date] = {
    //         id : this.id,
    //         origin:items
    //     };
    //     tmpCookie =  Object.assign(tmpCookie,cookieDatas);
    //     console.log('tmpData ;'+JSON.stringify(tmpCookie));
    //     cookies.set('datas', tmpCookie, { path: '/' });
    //     this.setState(()=> ({cookieDatas : tmpCookie}))
    // }
    checkValid=()=>{
        const {amount,isIncome,isCash,detail} = this.state;
        if(!amount){
            alert('금액을 입력하세요!')
        }else if(isIncome===''){
            alert('수입과 지출 중 한 가지를 선택하세요!')
        }else if(isCash===''){
            alert('카드와 현금 중 한 가지를 선택하세요!')
        }else if(detail===''){
            alert('상세 정보를 입력하세요!')
        }else{
            return true;
        }
        return false;
    }
    onAmountChange = (e)=>{
        // TODO 천단위 반점 찍는거
        // TODO 숫자만 입력되게 하기
        if(e.target.value){
            var chaser = e.target.value+"원"; // let 하고 const 안됨
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
        //console.log(e.target.id)
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
        })
    }
    onRegister =()=>{
        const{items,amount,detail,isCash,isIncome} = this.state;
        if(this.checkValid()){
            this.setState({
                items : items.concat({
                    id:this.id++,
                    amount : amount,
                    detail : detail,
                    isCash : isCash,
                    isIncome : isIncome,
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
    render() {
        const {items,chaser, amount, detail, dropdownOpen,dropdownTitle
                ,date,incomeBtnSize,outcomeBtnSize} = this.state;
        return (
            <div class="docs-example">
            {/* <h1>{date} 입니다.</h1> */}
            <h1><input type="text" value = {date} onChange = {this.onDateChange}/></h1>
                <Form>    
                    <Label>금액</Label>&nbsp;&nbsp;&nbsp;
                    <Button id ='income' color="success" size = {incomeBtnSize} onClick = {this.onBtnClick}>수입</Button>&nbsp;
                    <Button id ='outcome'color="info" size = {outcomeBtnSize} onClick = {this.onBtnClick}>지출</Button>
                    <Input  type="text"
                            value={amount}
                            placeholder="금액을 입력하세요."
                            onChange = {this.onAmountChange}/>
                    <AmountChaser chaser ={chaser}/>
                
                    <Dropdown isOpen={dropdownOpen} toggle={this.onDropDownToggle}>
                    <DropdownToggle caret>
                        {dropdownTitle}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem id ='cash' onClick ={this.onDropDownClick}>현금</DropdownItem>
                        <DropdownItem id ='card' onClick ={this.onDropDownClick}>카드</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
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
            </div>
        );
    }
}

export default InputForm;