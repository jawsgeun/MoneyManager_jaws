import React from 'react';
import { Badge } from 'reactstrap';
import './Item.css'

const Item = ({id,amount,isIncome,isCash,detail,onRemove}) => {
    this.state = {
        iColor :isIncome?'success':'info',
        income : isIncome?'수입':'지출',
        cash : isCash?'현금':'카드',
    }
    const {iColor,income,cash} = this.state;
    return (
        <div className ='item'>
                <div className ='text'>
                    <h3>{amount}원{'  '}
                     <Badge color={iColor}>{income}</Badge>{'  '}
                     <Badge color='secondary'>{cash}   </Badge>{'  '}
                     ( {detail} )
                    </h3>
                </div>
                <div className="remove" onClick={(e)=>{e.stopPropagation();
                onRemove(id)}}>X</div>
        </div>
    );
};

export default Item;