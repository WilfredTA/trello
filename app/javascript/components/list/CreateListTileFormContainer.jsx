import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTileForm from './CreateListTileForm';


class CreateListTileFormContainer extends React.Component {

  handleChange = (e) => {
    this.props.handleChange(e);
  }

  handleCloseClick = () => {
    this.props.handleCloseClick();
  }
  render() {
    return (
      <div>
        <CreateListTileForm 
          handleChange={this.handleChange} 
          onCloseClick={this.handleCloseClick}
          title={this.props.title}/>
      </div>
    )
  }
}

export default CreateListTileFormContainer;