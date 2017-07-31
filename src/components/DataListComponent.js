/**
 * Created by nlbang on 6/21/2017.
 */
import React from 'react'
import PropTypes from 'prop-types';

const DataListComponent = ({data, onClick}) => (
            <div>
                <button onClick={onClick}>get data</button>
                <ul>
                    {data.map((d, i) =>
                        <li key={i}>{d.title}</li>
                    )}
                </ul>
            </div>
);

DataListComponent.prototype = {
    onClick: PropTypes.func.required,
    data: PropTypes.array.required
};

export default DataListComponent;
