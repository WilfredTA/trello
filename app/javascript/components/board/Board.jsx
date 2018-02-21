import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';


class Board extends React.Component {

    render() {
        return(
            <div>
                {this.props.message}
            </div>
        )
    }
}

export default Board;
