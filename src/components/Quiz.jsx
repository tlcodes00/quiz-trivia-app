import clsx from 'clsx'
import '../assets/App.css'
import sgemoji from '../assets/sgemoji.png'
import vanish from '../assets/vanishemoji.gif'
import { decodeHTML } from '../js/utils.js'
import { useQuiz } from '../js/useQuiz.js'
import Question from './Question.jsx'

export default function Quiz({ results, onReset }) {
    const { shuffledQuestions, selectedAnswers, isSubmitted, setIsSubmitted, handleAnswer, allAnswered, score } = useQuiz(results)

    return (
        <div className="quiz-container">
            <h1 className="text">Quizzical</h1>
            <p className="text">Good luck!</p>
            <div id="quiz-entity">
                {shuffledQuestions.map((item, questionIndex) => (
                    <Question
                        key={questionIndex}
                        item={item}
                        questionIndex={questionIndex}
                        selectedAnswers={selectedAnswers}
                        isSubmitted={isSubmitted}
                        onAnswer={handleAnswer}
                    />
                ))}
            </div>
            {allAnswered && (
                <div className="check-container">
                    {isSubmitted && (
                        score === results.length
                            ? <div><p>LETS GO {score}/{results.length}</p><img src={sgemoji}/></div>
                            : <div><p>You got {score}/{results.length} correct!</p><img src={vanish}/></div>
                    )}
                    <button
                        onClick={() => isSubmitted ? onReset() : setIsSubmitted(true)}
                        className="check-btn"
                    >
                        {isSubmitted ? "Play Again" : "Check Answers"}
                    </button>
                </div>
            )}
        </div>
    )
}