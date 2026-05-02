import clsx from 'clsx'
import { decodeHTML } from '../js/utils.js'

export default function Question({ item, questionIndex, selectedAnswers, isSubmitted, onAnswer}) {
    return (
        <div>
            <h2>{decodeHTML(item.question)}</h2>
            {item.allAnswers.map((answer, answerIndex) => (
                <button
                    key={answerIndex}
                    disabled={isSubmitted}
                    className={clsx("answer-btn", {
                        "selected": !isSubmitted && selectedAnswers[questionIndex] === answer,
                        "correct": isSubmitted && answer === item.correct_answer,
                        "incorrect": isSubmitted && selectedAnswers[questionIndex] === answer && answer !== item.correct_answer
                    })}
                    onClick={() => onAnswer(questionIndex, answer)}
                >
                    {decodeHTML(answer)}
                </button>
            ))}
        </div>
    )
}