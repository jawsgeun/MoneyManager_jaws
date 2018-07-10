import React, { Component } from 'react';
import TodoListTemplete from './component/TodoListTemplete';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';
import Palette from './component/Palette';


class App extends Component {

  id =3;
  state = {
    input : '',
    todos:[
      { id: 0, text: ' 리액트 소개1', checked: false, color : '#FF0000' },
      { id: 1, text: ' 리액트 소개2', checked: true,  color : '#00FF00' },
      { id: 2, text: ' 리액트 소개3', checked: false, color : '#0000FF' }
    ],
    color : '',
  }
  handleChange = (e)=>{
    this.setState({
      input:e.target.value
    })
  }
  handleCreate = () =>{
    const {input,todos,color} = this.state;
    this.setState({
      input :'',
      todos : todos.concat({
        id:this.id++,
        text:input,
        checked:false,
        color :color,
      }),
      color : '',
    });
  }
  handleKeyPress = (e)=>{
    if(e.key ==='Enter'){
      this.handleCreate();
    }
  }
  handleToggle = (id) =>{
    const{todos} = this.state;
        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todos => todos.id === id)
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos : nextTodos
    })
  }
  handleRemove = (id)=>{
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todos => todos.id !== id)
    });
  }
  handleColorPress = (color) =>{
    this.setState({
      color : color
    })
  }
  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
  render() {
    const { input,todos,color } = this.state;
    const { 
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleColorPress,
    } = this;
    return (
      <TodoListTemplete 
      form = {(
        <Form
          value = {input}
          color = {color}
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
        />)}
      palette = {(
        <Palette
          colors = {this.colors}
          onPress = {handleColorPress}
        />)}     
      >
        <TodoItemList todos = {todos} onToggle ={handleToggle} onRemove ={this.handleRemove}/>
      </TodoListTemplete>
    );
  }
}

export default App;
