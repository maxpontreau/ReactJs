import React from 'react';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';


const mockList = [
  {
    id : 1,
    title : 'Faire un truc',
    isDone : false,
  }, {
    id : 2,
    title : 'Faire un second truc',
    isDone : false,
  }, {
    id : 3,
    title : 'Faire un troisieme truc',
    isDone : false,
  }, {
    id : 4,
    title : 'Faire un quatrieme truc',
    isDone : false,
  },
]

export class TodoContainer extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      todos : mockList
    }
    
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  
  addTodo (title) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, {
        id : prevState.todos.length + 1,
        title,
        isDone: false
      }],
    }));
  }
  
  removeTodo () {
    this.setState(() => ({
      todos: [],
    }));
  }
  
  updateTodo (todo) {
    
    // Find todo to update in the todos list
    const updateTodo = this.state.todos.find(item => item.id === todo.id);
    updateTodo.isDone = !updateTodo.isDone;
    
    // Filter other Todos
    const others = this.state.todos.filter(item => item.id !== todo.id);
    
    this.setState((prevState, props) => ({
      todos: [...others, updateTodo].sort((a, b) => a.id - b.id),
    }));
  }
  
  render () {
    return (
      <div>
          <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
          <TodoList todos={this.state.todos} updateTodo={this.updateTodo}/>
      </div>
    );
  }
}