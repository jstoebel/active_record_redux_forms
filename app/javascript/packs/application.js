/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers/index';

import Register from './containers/Register'
import Hello from './hello_react'

// middle ware to log changes to state
const consoleMessages = store => next => action => {

  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  result = next(action)
  console.log(store.getState())
  console.groupEnd()
  return result
}
const saveState = () =>
    localStorage['redux-store'] = JSON.stringify(store.getState());

// pulls local storage if it exists, otherwise set up fresh state
// const initialState = (localStorage['redux-store']) ?
//     JSON.parse(localStorage['redux-store']) :
//     {};

const initialState = {}; // for now, clear out localstorage at each reload

const createStoreWithMiddleware = applyMiddleware(consoleMessages)(createStore);

// const store = createStoreWithMiddleware(reducers, initialState)
const store = createStore(reducers, initialState);
store.subscribe(saveState);

const mySubmit = (formProps) => {
    console.log('woohoo! Here are the formProps:')
    console.log(formProps)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store} >
        <Register for="User" onSubmit={mySubmit} >
        </Register>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})