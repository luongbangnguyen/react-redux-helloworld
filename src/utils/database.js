/**
 * Created by nlbang on 7/18/2017.
 */
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7_AszAyT9abRAKw6NOiQSEW5B3fzdbY8",
    authDomain: "demoredux-8802a.firebaseapp.com",
    databaseURL: "https://demoredux-8802a.firebaseio.com",
    projectId: "demoredux-8802a",
    storageBucket: "",
    messagingSenderId: "2421657557"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;