import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx'
import * as firebase from 'firebase';
import firebaseConfig from '/Users/harrisonedwards/code/andHoney/firebaseconfig.js'

firebase.initializeApp(firebaseConfig);

ReactDom.render(<App />, document.getElementById('app')); 