import React from 'react';
import PropTypes from 'prop-types';

class ListsDisplay extends React.Component {
  render() {
    const lists = this.props.lists.map((list) => {
      return (
        <div>
          {list.title}
        </div>
      )
    })
    return (<div>{lists}</div>);
  }
}

export default ListsDisplay;
