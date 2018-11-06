import React from 'react';

import CatSearchContainer from './containers/catSearchContainer.js';
import CatSearchResultContainer from './containers/catSearchResultContainer.js';

const CatHub = () => {
    return (
        <div>
            <section id="banner"><CatSearchContainer /></section>
            <CatSearchResultContainer />
        </div>);
}
 

export default CatHub;