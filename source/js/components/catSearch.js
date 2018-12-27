import React, { Component } from 'react';

let CatSearch = ({ handleImageClick }) => (
    <div>
        <div className="container">
            <div>
                <div>
                    <div>
                        <img className="text button style2 scrolly-middle"  src="images/index.jpg" alt="Cat Search" onClick={() => handleImageClick()} />
                        <h3>Cat Search</h3>
                   </div>
                </div>
            </div>
        </div>
    </div>
)

export default CatSearch;