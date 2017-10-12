export const setAnswerIndex = (index) => {
    return {
      type: 'SET_ANSWER_INDEX',
      payload: index
    }
};

export const setRadio = (selection) => {
  return {
    type: 'SET_RADIO_BUTTON',
    payload: selection
  }
}