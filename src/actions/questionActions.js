export const addVote = (questionId, answerId) => {
  return {
    type: 'VOTE',
    questionId: questionId,
    answerId: answerId
  };
};
