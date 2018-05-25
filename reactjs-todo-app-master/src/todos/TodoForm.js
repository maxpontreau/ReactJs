import React from 'react';
import {TextField, FlatButton} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import PropTypes from 'prop-types';

export class TodoForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
    };
    
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  
  handleAddClick () {
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState(() => ({
        value: '',
      }));
    }
  }
  
  handleRemoveClick () {
    this.props.removeTodo();
  }
  
  render () {
    return (
      <div>
        <TextField
          value={this.state.value}
          floatingLabelText="Saisir un todo"
          onChange={this.handleChange}
        />
        <FlatButton
          icon={<AddIcon />}
          onClick={this.handleAddClick}
        />
        <FlatButton
          icon={<DeleteIcon />}
          onClick={this.handleRemoveClick}
        />
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo : PropTypes.func.isRequired,
  removeTodo : PropTypes.func.isRequired,
}
