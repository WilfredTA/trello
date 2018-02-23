import React from 'react';
import PropTypes from 'prop-types';
import dragula from 'react-dragula';
import ReactDOM from 'react-dom';

import ListContainer from './ListContainer';

class ListsDisplay extends React.Component {

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);
    let options = {};
    const drake = dragula([container], options)
      .on('drop', function(el) {
        debugger;
        el.dispatchEvent(new Event('drop', { 'bubbles': true }));
      });

    drake.on('drop', (el) => {
      debugger;
    });
  }

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
    return (
      <div>
        {listContainers}
      </div>
    );
  }
}

export default ListsDisplay;
