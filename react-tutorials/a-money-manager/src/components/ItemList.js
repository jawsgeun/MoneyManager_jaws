import React, { Component } from 'react';
import Item from './Item';
import './Item.css'


class ItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.items===nextProps.items){
            return false;
        }    
        return true;
    }
    render() {
        const {items, onRemove} = this.props;
        const itemList = items.map(({id,detail,amount,isCash,isIncome,category})=>(
            <Item
            key = {id}
            id = {id}
            detail = {detail}
            amount = {amount}
            isCash = {isCash}
            isIncome = {isIncome}
            onRemove = {onRemove}
            category = {category}/>
        ))
        if(itemList.length===0){return(
            <div className = 'item'>
                <h3>오늘의 가계부를 입력해보세요!</h3>
            </div>
        )}
        return (
            <div>
                {itemList}
            </div>
        );
    }
}

export default ItemList;