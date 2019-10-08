import React, { Fragment, Component, View } from 'react';
// import SearchIcon from "@material-ui/icons/Search";


import axios from 'axios';

// const API_URL = 'http://app01.303net.pvt:8080/admin/scores'
const API_URL = 'http://yahoo.com'


class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { query: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    handleSubmit(event) {
        console.log(this.state.value);
    }

    render() {
        return (
            <form>
                
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                    style={{width: '600px', height: '25px', fontSize: '1em'}}
                />
                <input type="Submit" value="Submit"/>
                
            </form>
        )
    }
}

export default SearchBar

