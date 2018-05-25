import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, Checkbox} from 'material-ui';

export class TodoList extends React.Component {
  
  updateTodoState (todo) {
    this.props.updateTodo(todo);
  }
  
  render () {
    if (this.props.todos.length === 0) {
      return <div>Vous n'avez pas de todo</div>
    }
    
    return (
      <List>
        {this.props.todos.map((todo) => {
          return <ListItem key={todo.id}
                           primaryText={todo.title}
                           style={todo.isDone ? {textDecoration: 'line-through'} : undefined}
                           leftCheckbox={<Checkbox checked={todo.isDone}
                                                   onCheck={this.updateTodoState.bind(this, todo)}/>}/>
        })
        }
      </List>
    );
  }
}

TodoList.propTypes = {
  todos : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateTodo : PropTypes.func.isRequired,
}