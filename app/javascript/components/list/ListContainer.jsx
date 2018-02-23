import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ListEditForm from './ListEditForm';
import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  state = {
    showForm: false,
    listTitle: this.props.list.title,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true,
    })
  }

  handleSubmit = (e) => {
    const store = this.context.store;
    e.preventDefault();
    store.dispatch(actions.updateList({id: this.props.list.id, title: this.state.listTitle}))
  }

  handleChange = (e) => {
    this.setState({
      listTitle: e.target.value,
    });
  }

  handleDrop = (e) => {
    debugger;
  }

  render() {
    if (this.state.showForm) {
      return (
        <ListEditForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          listTitle={this.state.listTitle}
        />
      );
    } else {
      return (
        <List
          list={this.props.list}
          handleClick={this.handleClick}
          onDrop={this.handleDrop}
        />
      );
    }
  }
}

export default ListContainer;
