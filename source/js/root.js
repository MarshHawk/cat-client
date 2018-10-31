import React from 'react';
import { connect } from 'react-redux';

import CatSearchContainer from './containers/catSearchContainer.js';
import LoginPageContainer from './containers/loginPageContainer.js';

const Root = ({isAuthenticated}) => {
    return (isAuthenticated ? <CatSearchContainer /> : <LoginPageContainer />);
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer