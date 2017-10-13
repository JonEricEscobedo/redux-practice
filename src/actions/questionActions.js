export const addVote = (questionId, answerId) => ({
    type: 'VOTE',
    questionId: questionId,
    answerId: answerId
})