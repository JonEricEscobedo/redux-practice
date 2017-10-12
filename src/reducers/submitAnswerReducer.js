const submitAnswerReducer = (state = false, action) => {
    switch (action.type) {
        case 'SUBMIT_ANSWER': {
            state = action.payload
            break;
        }
        default: {
            return state;
        }
    }
    return state;
}

export default submitAnswerReducer;