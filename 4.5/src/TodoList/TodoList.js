import React, { Component } from 'react';
import TodoLine from './TodoLine/TodoLine';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        const todoList = [
            { id: 1, title: "Tache 1", isDone: true},
            { id: 2, title: "Tache 2", isDone: true},
            { id: 3, title: "Tache 3", isDone: true},
            { id: 4, title: "Tache 4", isDone: false}];
        const listDOMTodoItem =  todoList.map((todo) => <TodoLine title={todo.title} isDone={todo.isDone} key={todo.id}/>);
        this.state = {listDOMTodoItem: listDOMTodoItem};
    }

    render () {
        return (
            <div>
                <label>
                    {this.state.listDOMTodoItem.length} TodoItem
                </label>
                <table className="todoTable">
                    <tbody>
                    {this.state.listDOMTodoItem}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;