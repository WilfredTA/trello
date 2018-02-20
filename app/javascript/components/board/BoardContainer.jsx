import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Board from './Board';
import apiClient from '../lib/ApiClient';

class BoardContainer extends React.Component {
    static contextTypes = {
        store: PropTypes.object.required
    }

    componentDidMount(){
        const store = this.context.store;
        this.unsubscribe = store.subscribe(() => { this.forceUpdate()})
        // Fetch a board with id from the params held in match prop with AJAX
        // update the store with the board object
       
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        // render a <Board /> component
        // <Board /> will get props from BoardContainer as props
        return(
            <Board message="hi"/>

        )

    }

 
}

export default BoardContainer;