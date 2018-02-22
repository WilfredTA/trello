import React from 'react';
import PropTypes from 'prop-types';

class ListEditForm extends React.Component {
  render() {
    return (
      <form>
        <input
          onBlur={this.props.handleSubmit}
          onChange={this.props.handleChange}
          type="text"
          value={this.props.listTitle}
        />
      </form>
    );
  }
}

export default ListEditForm;
