export const submitAnswer = (isSubmitted) => {
    return {
      type: 'SUBMIT_ANSWER',
      payload: isSubmitted
    }
};
