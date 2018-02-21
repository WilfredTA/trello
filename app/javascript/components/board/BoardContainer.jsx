import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';
import apiClient from '../../lib/ApiClient';
import { fetchBoardSuccess } from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => { this.forceUpdate() })
    apiClient.getBoard(board => store.dispatch(fetchBoardSuccess(board), '/api'+this.props.match.url))
  }

  getBoard = () => {
    const store = this.context.store;
    return store.getState().board;
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
      // render a <Board /> component
      // <Board /> will get props from BoardContainer as props
    const boardInfo = this.getBoard();
    // const toRender = boardInfo ? <Board message="hi" boardInfo={boardInfo}/> : null;
    let toRender;
    if (boardInfo) {
      toRender = (<Board message="hi" boardInfo={boardInfo}/>);
    } else {
      return null;
    }

    return (
      {toRender}
    )
  }


}

export default BoardContainer;
