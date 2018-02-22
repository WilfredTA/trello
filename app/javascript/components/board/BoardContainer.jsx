import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';
import apiClient from '../../lib/ApiClient';
import * as actions from '../../actions/BoardActions';
import ListsDisplayContainer from '../list/ListsDisplayContainer';
import ToggleableCreateListTile from '../list/ToggleableCreateListTile';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => { this.forceUpdate() })
    const id = this.props.match.params.id;
    store.dispatch(actions.fetchBoard(id));
  }

  getBoard = () => {
    const store = this.context.store;
    return store.getState().boards.find((board) => {
      console.log(board)
      return board.id === Number(this.props.match.params.id);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
      // render a <Board /> component
      // <Board /> will get props from BoardContainer as props
    const boardInfo = this.getBoard();
    // debugger;
    // const toRender = boardInfo ? (<Board message="hi" boardInfo={boardInfo}/>) : null;
    if (boardInfo) {
      return (
        <div>
          <Board message="" boardInfo={boardInfo}/>
          <ListsDisplayContainer lists={boardInfo.lists}  />
        </div>
    );
    } else {
      return null;
    }
  }


}

export default BoardContainer;
