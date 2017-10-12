const selectedAnswerReducer = (state = {
    answerIndex: null,
    selectedRadio: null
}, action) => {
    switch (action.type) {
        case 'SET_ANSWER_INDEX': {
            // state = action.payload
            state = {
                ...state,
                answerIndex: action.payload
            }
            break;
        }
        case 'SET_RADIO_BUTTON': {
            state = {
                ...state,
                selectedRadio: action.payload
            }
            break;
        }
        default: {
            return state;
        }
    }
    return state;
}

export default selectedAnswerReducer;