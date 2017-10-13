import React from 'react';
import { connect } from 'react-redux';

import Question from '../components/Question';
import { addVote } from '../actions/questionActions';
import { setQuestion } from '../actions/currentQuestionActions';
import { setAnswerIndex, setRadio } from '../actions/selectedAnswerActions';
import { submitAnswer } from '../actions/submitAnswerActions';

class App extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorMessage = null;
    }

    componentWillMount() {
        this.fetchRandomQuestion();
    }

    fetchRandomQuestion() {
        const questionList = this.props.questions;
        const randomIndex = Math.floor(Math.random() * questionList.length);

        this.props.setQuestion(questionList[randomIndex]);
    }
    
    handleChange(answerId) {
        let answerIndex = answerId - 1;

        this.props.setAnswerIndex(answerIndex);
        this.props.setRadio(answerIndex);
    }

    handleSubmit() {
        if (this.props.selectedAnswerIndex !== null) {
            this.props.submitAnswer(true);
            this.props.addVote(this.props.currentQuestion.id, (this.props.selectedAnswerIndex + 1));
        }
        this.props.setRadio(null);
    }

    
    render() {
        let status = null;
        let button = null;
        
        if (this.props.submitted) {
            let answerObject = this.props.questions[this.props.currentQuestion.id - 1].answers;
            let selectedAnswerText = this.props.currentQuestion.answers[this.props.selectedAnswerIndex].text;
            let selectedAnswerVotes = this.props.questions[this.props.currentQuestion.id - 1].answers[this.props.selectedAnswerIndex].responses;
            let selectedAnswerId = this.props.selectedAnswerIndex + 1;
            let otherAnswers = [];
            
            for (let key in answerObject) {
                if (answerObject[key].id !== selectedAnswerId) {
                    otherAnswers.push([answerObject[key].text, answerObject[key].responses]);
                }
            }
            
            status = (
                <div className="container">
                    <h1>Answer submitted.</h1>
                    {<p className="lead">You selected {selectedAnswerText} <span className="text-muted">({selectedAnswerVotes} votes)</span></p>}
                    <p>Others voted for:</p>
                    {otherAnswers.map((answer, index) => {
                        return (
                            <p key={index}>{answer[0]} <span className="text-muted">({answer[1]} votes)</span></p>
                        )
                    })}
                </div>
            )

            button = (
                <button 
                    className="btn btn-success btn-lg btn-block btn-submit" 
                    disabled
                >
                    Submit
                </button>
            )
        } else {
            status = (
                <div className="container">
                    <h1 id="hero" className="display-1">Question...</h1>
                </div>
            )

            button = (
                <button 
                    className="btn btn-success btn-lg btn-block btn-submit" 
                    onClick={() => this.handleSubmit()}
                >
                    Submit
                </button>
            )
        }

        return (
            <div>
                <header className="jumbotron">
                    { status }
                </header>

                <section className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Question 
                                currentQuestion={this.props.currentQuestion}
                                selectedAnswerIndex={this.props.selectedAnswerIndex}
                                selectedRadio={this.props.selectedRadio}
                                handleChange={this.handleChange}
                            />
                            { button }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    questions: state.question,
    currentQuestion: state.currentQuestion,
    selectedAnswerIndex: state.selectedAnswerIndex.answerIndex,
    selectedRadio: state.selectedRadio.selectedRadio,
    submitted: state.submitted,
});

const mapDispatchToProps = dispatch => ({
    addVote: (questionId, answerId) => dispatch(addVote(questionId, answerId)),
    setQuestion: question => dispatch(setQuestion(question)),
    setAnswerIndex: index => dispatch(setAnswerIndex(index)),
    setRadio: selection => dispatch(setRadio(selection)),
    submitAnswer: isSubmitted => dispatch(submitAnswer(isSubmitted))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)