import React from 'react';

const Answer = (props) => {
    return (
        <div>
            <li className="list-group-item">
                <input 
                    type="radio"
                    className="btn-radio"
                    name="answer"
                    autoComplete="off"
                    checked={props.selectedRadio === (props.answerId - 1)}
                    onChange={() => props.handleChange(props.answerId)}
                />
                {props.answerText}
            </li>
        </div>
    )
}

export default Answer;
