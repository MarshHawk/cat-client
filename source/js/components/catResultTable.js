import React from 'react';
import { Link } from 'react-router-dom';

let CatResultTable = ({ handleImageClick }) => (
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

export default CatResultTable;