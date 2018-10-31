import { connect } from 'react-redux';

import LoginPage from '../components/loginPage.js';
import { loginUser } from '../actions/login.js';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginWithAuth(creds) {
            dispatch(loginUser(creds))
        }
    }
}

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginPageContainer;