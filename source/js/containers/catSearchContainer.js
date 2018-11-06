import { connect } from 'react-redux';

import CatSearch from '../components/catSearch.js';
import { fetchAllMij} from '../actions/fetchAll.js';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImageClick() {
            dispatch(fetchAllMij())
        }
    }
}

const CatSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatSearch)

export default CatSearchContainer