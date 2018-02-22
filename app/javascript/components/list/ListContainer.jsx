import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ListEditForm from './ListEditForm';

class ListContainer extends React.Component {
  state = {
    showForm: false,
    listTitle: this.props.list.title,
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true,
    })
  }

  handleSubmit = (e) => {

  }

  handleChange = (e) => {
    this.setState({
      listTitle: e.target.value,
    });
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
        />
      );
    }
  }
}

export default ListContainer;
