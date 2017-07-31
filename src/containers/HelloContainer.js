/**
 * Created by nlbang on 6/14/2017.
 */
import { connect } from 'react-redux';
import { displayHello } from '../actions/helloAction';
import HelloComponent from '../components/HelloComponent';

const mapStateToProps = (state, ownProps) => (
    {
        message: state.hello
    }
);

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onChange: (value) => {
            dispatch(displayHello(value));
        }
    }
};

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloComponent);

export default HelloContainer;
