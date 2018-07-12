import React, { Component } from 'react';
import Item from '../components/Item';

class Setting extends Component {
    constructor(props) {
        super(props);
        let allDatas=[];
        Object.keys(localStorage).forEach( v =>{
            allDatas.push(<b>{v}</b>)
            allDatas.push(this.getDataFromStorage(JSON.parse(localStorage.getItem(v))));
        })
        this.state = {
            allDatas : allDatas,
        }
    }
    onRemove = ()=>{
        //do nothing
    }
    getDataFromStorage = (local)=>{
        const dataComponentList = local.map(({id,detail,amount,isCash,isIncome,category})=>(
            <Item
            key = {id}
            id = {id}
            detail = {detail}
            amount = {amount}
            isCash = {isCash}
            isIncome = {isIncome}
            onRemove = {this.onRemove}
            category = {category}/>
        ))
        if(dataComponentList.length === 0 ){
            return <h1><b>&nbsp;&nbsp;데이터 없음</b></h1>
        }
        return dataComponentList;
    }
    
    render() {
        return (
            <div>
            <h1>----총 누적 데이터들----</h1>
             {this.state.allDatas}   
            </div>
        );
    }
}

export default Setting;