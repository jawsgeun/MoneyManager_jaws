import React, { Component } from 'react';
import './App.css';
import PhoneForm from './component/PhoneForm'
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
  id = 3
  state = {
    information : [
      {
        id : 0,
        name : 'wrns',
        phone :'010 -00-000'
      },
      {
        id : 1,
        name : 'wrthrnd',
        phone :'010 -11-111'
      },
      {
        id : 2,
        name : 'wrthrnd2',
        phone :'010 -11-111'
      },
    ],
    keyword : '',
  }
  handleChange = (e) => {
    this.setState({
      keyword : e.target.value,
    });
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({id : this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id!==id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => id === info.id
        ? {...info, ...data}
        : info
      )
    })
  }
  render() {
    const { information,keyword} = this.state;
    return (
      <div>
        <PhoneForm func = {this.handleCreate}/>
        <p>
          <input
            placeholder = "검색 할 이름을 입력하세요"
            onChange={this.handleChange}
            value = {keyword}
          />
        </p>
        <hr/>
        <PhoneInfoList 
          data = {information.filter(
            info => info.name.indexOf(keyword)>-1
          )}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;