import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CreateListTileForm extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    showForm: PropTypes.bool,
    onTileClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  render() {
    return(
      <div 
      id="new-list" 
      >
        <span>Add a list...</span>
        <input
          type="text" 
          placeholder="Add a list..." 
          ref="input" 
          value={this.props.title} 
          onChange={this.props.handleChange}
          //onKeyPress={this.handleKeyPress}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            ref="submitButton"
            onClick={this.props.onSubmit}
          />
          <i 
            className="x-icon icon"
            onClick={this.props.onCloseClick}
          ></i>
        </div>
    </div>

    )
  }
}