import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTile from './createListTile';
import CreateListTileFormContainer from './CreateListTileFormContainer';


class ToggleableCreateListTile extends React.Component {
  state = {
    showForm: false,
    title: ''
  }

  handleClick = () => {
    this.setState({showForm:true})
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleCloseClick = () => {
    this.setState({
      showForm: false,
    })
  }

  render() {
   
    if (this.state.showForm) {
      return (
        <CreateListTileFormContainer 
          title={this.state.title} 
          showForm={this.state.showForm} 
          handleChange={this.handleChange}
          handleCloseClick={this.handleCloseClick}/>
      )
    } else {
      return (
        <CreateListTile onClick={this.handleClick} />
      )
    }

    
  }
}

export default ToggleableCreateListTile;