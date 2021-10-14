import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bulma/css/bulma.min.css';

import App from './App';
import Test from './js/test';
import Message from "./components/Message/Message";
import UserLogin from "./components/UserLogin/UserLogin";
import LoginPage from "./components/LoginPage/LoginPage";
import AnimationTest from "./components/AnimationTest/animation-test";

ReactDOM.render(
  // <React.StrictMode>
    <>
        {/*<AnimationTest />*/}
        <LoginPage />
        {/*<UserLogin />*/}
        <App />
        <Test />
        <Message properties="valid black bright" message="this,.. is, my,, own unique,. message." />
    </>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
