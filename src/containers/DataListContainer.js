/**
 * Created by nlbang on 6/22/2017.
 */

/*import {connect} from 'react-redux';
import DataListComponent from '../components/DataListComponent'
import {fetchData} from '../actions/apiAction'

const mapStateToProps = (state, ownProps) => (
    {
        data: state.data
    }
);

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onClick: () => {
            fetchData(dispatch);
        }
    }
);

const DataListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataListComponent);

export default DataListContainer;*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/apiAction'
import PropTypes from 'prop-types';

class DataListComponent extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, onChange } = this.props;
        dispatch(fetchData());
    }

    handleOnClick() {
        this.props.dispatch(fetchData());
    }

    render () {
        const { data } = this.props;
        return (
            <div>
                <button onClick={this.handleOnClick}>get data</button>
                <ul>
                    {data.map((d, i) =>
                        <li key={i}>{d.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

DataListComponent.propTypes = {
    data: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onChange: (value) => {
            dispatch(fetchData());
        }
    }
};
const mapStateToProps = (state, ownProps) => (
    {
        data: state.data
    }
);


export default connect(mapStateToProps)(DataListComponent);
