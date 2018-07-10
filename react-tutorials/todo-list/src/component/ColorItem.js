import React, { Component } from 'react';

class ColorItem extends Component {
    static defaultProps = {
        color : '#c8c8c8',
    }
    render() {
        const {color, onPress} = this.props;
        const style = {
            background : color,
            width : '20px',
            height : '20px',
            display : 'inline-block',
            margin : '5px',
        }
        return (
            <div onClick = {()=>onPress(color)}style = {style}>
            </div>
        );
    }
}

export default ColorItem;