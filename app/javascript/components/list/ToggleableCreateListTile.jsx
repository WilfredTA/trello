import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTile from './createListTile';
import CreateListTileFormContainer from './CreateListTileFormContainer';

class ToggleableCreateListTile extends React.Component {
  state = {
    showForm: false,
  }

  handleClick = () => {
    this.setState({showForm:true})
  }

  render() {
   
    if (this.state.showForm) {
      return (
        <CreateListTileFormContainer />
      )
    } else {
      return (
        <CreateListTile onClick={this.handleClick} />
      )
    }

    
  }
}

export default ToggleableCreateListTile;