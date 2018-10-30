import { connect } from 'react-redux';

import LoginPage from '../components/loginPage.js';
//import { fetchAllMij} from '../actions/fetchAll.js';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)

export default LoginPage