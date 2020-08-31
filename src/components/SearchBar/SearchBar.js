import React from 'react';
import './SearchBar.css';

// https://www.yelp.com/developers/documentation/v3/business_search



class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'term': '',
            'location': '',
            'sortBy': 'best_match'
        };
        // member variable
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }
    //checks whether a sort by option is the chosen one by the user (or default)
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }
        else {
            return '';
        }
    }
    handleSortByChange(sortByOption) {
        this.setState({sortBy:sortByOption});
        //handles binding in renderSortByOptions?
    }
    handleTermChange(e) {
        this.setState({
            term: e.target.value
        });
    }
    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            // key: https://stackoverflow.com/questions/40668654/in-react-what-is-the-function-of-the-key-attribute-in-html-tag
        return <li 
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                    key={sortByOptionValue}
                    className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
        } );
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;

// Line 34:21:  The href attribute is required for an anchor to be keyboard 
// accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a 
// button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md 
//  jsx-a11y/anchor-is-valid