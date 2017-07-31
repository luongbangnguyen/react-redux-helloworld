/**
 * Created by nlbang on 6/20/2017.
 */
import React from 'react'
import HelloContainer from '../containers/HelloContainer'
import DataListContainer from '../containers/DataListContainer'
import SimpleFormComponent from '../components/SimpleFormComponent'
import {displayLoginSuccess} from '../actions/helloAction'

const App = () => (
    <div>
        <HelloContainer/>
        <h1>receive Data from server</h1>
        <DataListContainer/>
        <SimpleFormComponent onSubmit={displayLoginSuccess}/>
    </div>
);

export default App;
