import React from 'react';
import './SearchBar.css';

// https://www.yelp.com/developers/documentation/v3/business_search

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            // key: https://stackoverflow.com/questions/40668654/in-react-what-is-the-function-of-the-key-attribute-in-html-tag
        return <li key={sortByOptionValue}>{sortByOption}</li>
        } );
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
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