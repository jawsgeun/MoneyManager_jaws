import React from 'react';
import './TodoListTemplete.css';

const TodoListTemplete = ({form, children, palette}) => {
    return (
     <main className ="todo-list-templete">
      <div className ="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todo-wrapper">
        { children }
      </section>
     </main>
    );
};

export default TodoListTemplete;