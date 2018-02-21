import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreateListTile extends React.Component {


  render() {
    return(
      <div onClick={this.props.onClick} id="new-list" className="new-list"><span>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
            <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
        </div>
      </div>
    )
  }
}

export default CreateListTile;