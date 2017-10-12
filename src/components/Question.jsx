import React from 'react';

import Answer from './Answer';

const Question = (props) => {
    const isQuestionLoaded = props.currentQuestion;
    let question = null;
    let potentialAnswers = null;

    if (isQuestionLoaded) {
        question = (
            <p className="lead">What is your {props.currentQuestion.text.toLowerCase()}?</p>
        )
        potentialAnswers = props.currentQuestion.answers
    } else {
        question = (
            <p className="lead">Loading question</p>
        )
        potentialAnswers = [];
    }

    return (
        <div>
            {question}
            <div className="list-group">
                { potentialAnswers.map((answer, index) => {
                    return <Answer 
                        selectedAnswerIndex={props.selectedAnswerIndex}
                        selectedRadio={props.selectedRadio}
                        answerText={answer.text}
                        answerId={answer.id}
                        key={index}
                        handleChange={props.handleChange}
                    />
                }) }
            </div>
        </div>
    )
}

export default Question;
