import React, { Component } from 'react';
import Item from './Item';


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
        return (
            <div>
                {itemList}
            </div>
        );
    }
}

export default ItemList;