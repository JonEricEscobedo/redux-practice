// const questions = [{
//     "id": 1,
//     "text": "Favorite color",
//     "answers": [{
//       "id": 1,
//       "text": "Red",
//       "responses": 10
//     }, {
//       "id": 2,
//       "text": "Green",
//       "responses": 20
//     }, {
//       "id": 3,
//       "text": "Blue",
//       "responses": 5
//     }]
//   }, {
//     "id": 2,
//     "text": "Favorite animal",
//     "answers": [{
//       "id": 1,
//       "text": "Dog",
//       "responses": 150
//     }, {
//       "id": 2,
//       "text": "Cat",
//       "responses": 100
//     }, {
//       "id": 3,
//       "text": "Bird",
//       "responses": 17
//     }]
//   }];
  
//   const action = {
//     type: "VOTE",
//     questionId: 1,
//     answerId: 3
//   };
  
//   // Modify this to return a new state with the adjusted "responses" count.
//   function questionReducer(state, action) {
//     return state;
//   }
  
//   const answer = questionReducer(questions, action);
  
//   document.getElementById("answer").innerHTML = JSON.stringify(answer, null, 2);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);