import React, { Component,Fragment } from 'react';
import ColorItem from './ColorItem';

class Palette extends Component {

    render() {
        const {onPress} = this.props;
        const colorList = this.props.colors.map((num)=>(
            <ColorItem color = {num} onPress ={onPress}/>
        ))
        return (
            <Fragment>
                <b>색상선택</b><hr/>
            <div>
                {colorList}
            </div>
            </Fragment>
        );
    }
}

export default Palette;