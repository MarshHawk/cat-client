import React from 'react';
import ReactTable from 'react-table'

const catSearchResult = ({mijData, columns}) => {
    return (
    <article id="first" className="container box style1">
    <div className="inner">
        <header>
            <h1>Results</h1>
        </header>
        {mijData.length > 0 &&
            <ReactTable data={mijData} columns={columns} />
        }
    </div>
</article>);
}
 
export default catSearchResult;