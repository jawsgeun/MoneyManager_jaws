import React, { Component } from 'react';
import Item from './Item';
import './Item.css'


class ItemList extends Component {

    render() {
        const {items, onRemove} = this.props;
        const itemList = items.map(({id,detail,amount,isCash,isIncome})=>(
            <Item
            id = {id}
            detail = {detail}
            amount = {amount}
            isCash = {isCash}
            isIncome = {isIncome}
            onRemove = {onRemove}/>
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