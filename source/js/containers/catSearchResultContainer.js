import { connect } from 'react-redux';
import CatSearchResult from '../components/catSearchResult.js';

const mapStateToProps = (state) => {
    const columns = [{
        id: 'lccn',
        Header: 'LCCN',
        accessor: d => d['010'].subfields[0]['a']
      },
      {
        id: 'lc',
        Header: 'LC class',
        accessor: d => d['050'] !== undefined ? d['050'].subfields[0]['a'] : ''
      },
      {
        id: 'dewey',
        Header: 'Dewey',
        accessor: d => d['082'] !== undefined ? d['082'].subfields[0]['a'] : ''
      },
      {
        id: 'title',
        Header: 'Title',
        accessor: d => d['245'] !== undefined ? d['245'].subfields[0]['a'] : ''
      }

    ]
      
    return {
        mijData : state.mijResultPage,
        columns: columns
    }
}

const CatSearchResultContainer = connect(
    mapStateToProps,
    null
)(CatSearchResult)

export default CatSearchResultContainer;