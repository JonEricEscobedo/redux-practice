const questions = [{
    "id": 1,
    "text": "Favorite color",
    "answers": [{
      "id": 1,
      "text": "Red",
      "responses": 10
    }, {
      "id": 2,
      "text": "Green",
      "responses": 20
    }, {
      "id": 3,
      "text": "Blue",
      "responses": 5
    }]
  }, {
    "id": 2,
    "text": "Favorite animal",
    "answers": [{
      "id": 1,
      "text": "Dog",
      "responses": 150
    }, {
      "id": 2,
      "text": "Cat",
      "responses": 100
    }, {
      "id": 3,
      "text": "Bird",
      "responses": 17
    }]
}];

// Modify this to return a new state with the adjusted "responses" count.
const questionReducer = (state = questions, action) => {
    switch (action.type) {
      case 'VOTE': {
        const { questionId, answerId } = action;
        const question = state[questionId - 1];
        const answers = question.answers;
        const answer = answers[answerId - 1];
        const answerResponse = answer.responses;

        state = {
          ...state,
          [questionId - 1]: {
            ...question,
            answers: {
              ...answers,
              [answerId - 1]: {
                ...answer,
                responses: answerResponse + 1
              }
            }
          }
        }
        break;
      }
      default: {
        return state;
      }
    }
    return state;
}

export default questionReducer;