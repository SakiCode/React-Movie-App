import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        //ES6 Destructuring props and state
        const { callback } = this.props;

        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);
        this.timeout = setTimeout( () => {
            callback(false, this.state.value);
        }, 500);
    }

    render() {
        return (
            <div className='rmdb-searchbar'>
                <div className='rmdb-searchbar-content'>
                    <FontAwesome className='rmdb-fa-search' name='search' size='2x' />
                    <input
                        type='text'
                        className='rmdb-searchbar-input'
                        placeholder='Search'
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;