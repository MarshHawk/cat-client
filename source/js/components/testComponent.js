import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let CatSearch = ({ handleImageClick }) => (
    <div id="fh5co-main">
        <div className="container">
            <div>
                <div>
                    <div>
                        <img src="images/index.jpg" alt="Cat Search" onClick={() => handleImageClick()} />
                        <div>Cat Search</div>
                   </div>
                </div>
            </div>
        </div>
    </div>
)

export default CatSearch;