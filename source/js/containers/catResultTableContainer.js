import { connect } from 'react-redux';

import CatResultTable from '../components/catResultTable.js';
//import { fetchAllMij} from '../actions/fetchAll.js';

const mapStateToProps = (state, ownProps) => {
    const columns = [{
        Header: 'Dewey',
        accessor: '082' // String-based value accessors!
      }, {
        Header: 'LCCN',
        accessor: '010',
      }, {
        id: 'Lc', // Required because our accessor is not a string
        Header: 'LC',
        //accessor: d => d.friend.name // Custom value accessors!
      }]
    return {
        data

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const CatResultTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatResultTable)

export default CatResultTableContainer;