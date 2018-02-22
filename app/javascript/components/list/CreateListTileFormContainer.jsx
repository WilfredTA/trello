import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTileForm from './CreateListTileForm';
import * as actions from '../../actions/BoardActions';


class CreateListTileFormContainer extends React.Component {

  static contextTypes = {
    store: PropTypes.object
  };

  handleChange = (e) => {
    this.props.handleChange(e);
  }

  handleCloseClick = () => {
    this.props.handleCloseClick();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const list = {title: this.props.title, board_id: this.props.boardId}
    this.props.handleCloseClick();
    this.context.store.dispatch(actions.createList(list))
  }
  render() {
    return (
      <div>
        <CreateListTileForm 
          handleChange={this.handleChange} 
          onCloseClick={this.handleCloseClick}
          title={this.props.title}
          onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default CreateListTileFormContainer;