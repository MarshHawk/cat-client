import React from 'react';
import { connect } from 'react-redux';

import CatHub from './catHub';
import LoginPageContainer from './containers/loginPageContainer.js';

const Root = ({isAuthenticated}) => {
    return (isAuthenticated ? <CatHub/> : <LoginPageContainer />);
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