const currentQuestionReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_QUESTION': {
            state = action.payload
            break;
        }
        default: {
            return state;
        }
    }
    return state;
}

export default currentQuestionReducer;