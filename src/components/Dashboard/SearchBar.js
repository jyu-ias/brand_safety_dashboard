import React, { Fragment, Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import axios from 'axios';

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'


class SearchBar extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    getInfo = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default SearchBar

