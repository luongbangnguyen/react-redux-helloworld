/**
 * Created by nlbang on 6/21/2017.
 */
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = (json) => {
    return{
        type: RECEIVE_DATA,
        values: json.data.children.map(child => child.data)
    }
};

export const fetchData = () => {
    return dispatch => {
        fetch('https://www.reddit.com/r/reactjs.json')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));
    }
};

