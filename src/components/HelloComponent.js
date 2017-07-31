/**
 * Created by nlbang on 6/14/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const HelloComponent = ({onChange, message}) => (
    <div>
        <input onChange={e => onChange(e.target.value)}/>
        <h1>{message}</h1>
    </div>
);

HelloComponent.prototype = {
    onChange: PropTypes.func.required,
    message: PropTypes.string.required
};

export default HelloComponent;
