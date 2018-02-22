import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

class ListContainer extends React.Component {
  render() {
    return (
      <List
        list={this.props.list}
      />
    );
  }
}

export default ListContainer;
