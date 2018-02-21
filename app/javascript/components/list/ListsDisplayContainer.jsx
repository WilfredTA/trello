import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import ListsDisplay from './ListsDisplay';

class ListsDisplayContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  getAllLists = () => {
    debugger;
    const store = this.context.store;
    // fetch all lists
    const currentBoard = store.getState().boards.find((board) => {
      return board.id === Number(this.props.match.params.id);
    });
    return currentBoard;
  }

  render() {
    return (
      <div>
        <ListsDisplay lists={this.getAllLists()} />
      </div>
    );
  }
}

export default withRouter(ListsDisplayContainer);
