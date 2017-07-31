import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {checkLogin} from '../actions/helloAction'
import { connect } from 'react-redux';

const submit = (values, dispatch) => {
    return dispatch(checkLogin(values));
};

class SimpleFormComponent extends Component {
    render() {
        const { handleSubmit, message } = this.props;
        return (
            <div>
                <h2>Form Example</h2>
                <form  onSubmit={handleSubmit(submit)}>
                    <div>
                        <label>Username</label>
                        <div>
                            <Field  component="input" name="userName" type="text" placeholder="Username"/>
                        </div>

                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <Field component="input" type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit"> Log In
                        </button>
                    </div>
                </form>
                <h3>{message}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        message: state.login
    }
};

SimpleFormComponent = connect(mapStateToProps)(SimpleFormComponent);

export default reduxForm({
    form: 'simpleFormComponent'
})(SimpleFormComponent)