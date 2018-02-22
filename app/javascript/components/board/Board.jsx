import React from 'react';
import PropTypes from 'prop-types';

import ToggleableCreateListTile from '../list/ToggleableCreateListTile';
import ListDisplayContainer from '../list/ListsDisplayContainer';

class Board extends React.Component {

    render() {
      return(
        <div>
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

          </div>
        </div>
      )
    }
}

export default Board;
