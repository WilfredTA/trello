import React from 'react';
import PropTypes from 'prop-types';

import ListContainer from './ListContainer';

class ListsDisplay extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    const listContainers = this.props.lists.map((list) => {
      return (
        <ListContainer
          key={list.id}
          list={list}
        />
      );
    })
    return (<div>{listContainers}</div>);
  }
}

export default ListsDisplay;
