import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListsDisplay from './ListsDisplay';

class ListsDisplayContainer extends React.Component {
  getAllLists = () => {
    const store = this.context.store;
    // fetch all lists

  }

  render() {
    return (
      <div>
        <ListsDisplay lists={this.getAllLists} />
      </div>
    )
  }
}
