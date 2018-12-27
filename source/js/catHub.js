import React from 'react';
import { connect } from 'react-redux';
import CatSearchContainer from './containers/catSearchContainer.js';
import CatSearchResultContainer from './containers/catSearchResultContainer.js';

const CatHubComponent = ({showSearchResults}) => {
    return (
        <div>
            {showSearchResults ? <CatSearchResultContainer /> : <section id="banner"><CatSearchContainer /></section>}       
        </div>);
}

const mapStateToProps = (state) => {
    return {
        showSearchResults: state.showSearchResults
    }
}

const CatHub = connect(
    mapStateToProps,
    null
)(CatHubComponent)


export default CatHub;