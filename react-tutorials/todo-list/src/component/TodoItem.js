import React, { Component } from 'react';
import './TodoItem.css';
import ColorItem from './ColorItem';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const{text,checked,id,color,onToggle,onRemove} = this.props;
        return (
            <div className="todo-item"  onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked ?'checked':''}`}>
                  <div style = {{color : color}} >{text}<ColorItem color = {color}/></div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;