import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleableCreateListTile from '../list/ToggleableCreateListTile';


class Board extends React.Component {

    render() {
      return(
        <div>
          <header>
            <ul>
              <li id="title">{this.props.boardInfo.title}</li>
              <li className="star-icon icon"></li>
              <li className="private private-icon icon">Private</li>
            </ul>
            <div className="menu">
              <i className="more-icon sm-icon"></i>Show Menu</div>
            <div className="subscribed">
              <i className="sub-icon sm-icon"></i>Subscribed</div>
          </header>
          <ToggleableCreateListTile />
        </div>
      )
    }
}

export default Board;
