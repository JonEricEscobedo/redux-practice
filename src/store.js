import { createStore, combineReducers } from 'redux';

import questionReducer from './reducers/questionReducer';
import currentQuestionReducer from './reducers/currentQuestionReducer';
import selectedAnswerReducer from './reducers/selectedAnswerReducer';
import submitAnswerReducer from './reducers/submitAnswerReducer';

export default createStore(
    combineReducers({
        question: questionReducer,
        currentQuestion: currentQuestionReducer,
        selectedAnswerIndex: selectedAnswerReducer,
        selectedRadio: selectedAnswerReducer,
        submitted: submitAnswerReducer
    }),
    {}
);