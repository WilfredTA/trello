import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {

  render() {
    return (
      <div className="list">
        <a className="more-icon sm-icon" href=""></a>
        <div>
          <p
            className="list-title"
            onClick={this.props.handleClick}
          >
            {this.props.list.title}
          </p>
        </div>
        <div className="add-dropdown add-top">
          <div className="card"></div>
          <a className="button">Add</a>
          <i className="x-icon icon"></i>
          <div
            className="add-options"
          >
            <span>...</span>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
