import React from 'react';
import {Button} from 'reactstrap'
import './Popup.css'
const Confirm = ({onCancle,count,onConfirm}) => {
    const msg = count>0?count+' 개의 항목이 추가됩니다 계속하시겠습니까?':(count*-1)+' 개의 항목이 제거됩니다 계속하시겠습니까?'
    return (
        <div className='popup'>
                <div className='popup_inner'>
            <h1>{msg}</h1>
            <Button color ='success' onClick={onConfirm}>확인</Button>&nbsp;
            <Button color ='danger' onClick={onCancle}>취소</Button>
        </div>
        </div>
    );
};

export default Confirm;