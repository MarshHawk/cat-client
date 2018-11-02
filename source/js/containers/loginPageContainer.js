import { connect } from 'react-redux';

import LoginPage from '../components/loginPage.js';
import { loginUser, usernameChanged, passwordChanged } from '../actions/login.js';

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        password: state.auth.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginWithAuth(username, password) {
            dispatch(loginUser(username, password))
        },
        changeUsername(username) {
            dispatch(usernameChanged(username))
        },
        changePassword(passwords) {
            dispatch(passwordChanged(passwords))
        }
    }
}

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginPageContainer;