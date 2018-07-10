import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            name :'이름',
            phone : '010-0000-0000',
            id : 0,
        }
    }
    state = {
        editing : false,
        name :'',
        phone : '',
    }
    shouldComponentUpdate(nextProps, nextState) {
        if( this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleRemove = () =>{
        const { info, onRemove} = this.props;
        onRemove(info.id);
    }
    handleToggleEdit = () =>{
        const{editing} = this.state;
        const { info, onUpdate} = this.props;
        if(editing){
            onUpdate(info.id,{
                name : this.state.name,
                phone : this.state.phone
            });
        }else{
            this.setState({
                name: info.name,
                phone : info.phone,
            })
        }
        this.setState({
            editing : !editing
        });
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
          };
        const {editing} = this.state;
        const {
        name, phone, id
        } = this.props.info;
        console.log(name);
        return(
        <div style={style}>
            {
            editing ? (
                <Fragment>
                    <div>
                    <input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                    <input
                        value={this.state.phone}
                        name="phone"
                        onChange={this.handleChange}
                    />
                    </div>    
                </Fragment>
            ) : (
                <Fragment>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>                  
                </Fragment>
            )
            }
            <button onClick={this.handleToggleEdit}>
                { editing ? '적용' : '수정'}
            </button>
            <button onClick={this.handleRemove}>삭제</button>
        </div>  
        );
    }
}
export default PhoneInfo;