import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Container from "././containers/Container";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {reducer} from "./reducers/reducers";
import thunk from 'redux-thunk';

var store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>, document.getElementById("root"));

registerServiceWorker();
