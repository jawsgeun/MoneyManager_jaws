import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import './Item.css'
class Item extends Component {
    constructor(props) {
        super(props);
        const {isIncome,isCash} = this.props;
        this.state = {
            iColor :isIncome?'success':'info',
            income : isIncome?'수입':'지출',
            cash : isCash?'현금':'카드',
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state===nextState){
            return false;
        }
        return true;
    }
    render() {
        const {id,amount,detail,onRemove,category} = this.props;
        const {iColor,income,cash} = this.state;
        return (
            <div className ='item'>
            <div className ='text'>
                <h3>{amount}원{'  '}
                 <Badge color={iColor}>{income}</Badge>{'  '}
                 <Badge color='secondary'>{cash}   </Badge>{'  '}
                 <Badge color='warning'>{category}   </Badge>{'  '}
                 ( {detail} )
                </h3>
            </div>
            <div className="remove" onClick={(e)=>{e.stopPropagation();
            onRemove(id)}}>X</div>
    </div>
        );
    }
}

export default Item;
