import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as actions from '../../actions/BoardActions.js';

import ListsDisplay from './ListsDisplay';
import ToggleableCreateListTile from './ToggleableCreateListTile';

class ListsDisplayContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <ListsDisplay lists={this.props.lists} />
        <ToggleableCreateListTile />
      </div>
    );
  }
}

export default withRouter(ListsDisplayContainer);
