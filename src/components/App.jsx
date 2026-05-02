import Quiz from './Quiz.jsx'
import '../assets/App.css'
import sademoji from '../assets/sad-emoji.gif'
import { useApp } from '../js/useApp.js'

const QUESTION_OPTIONS = [5, 10, 15]
const DIFFICULTY_OPTIONS = ["easy", "medium", "hard"]

export default function App() {
    const { 
        numQuestions, setNumQuestions,
        difficulty, setDifficulty,
        category, setCategory,
        categories, quizData,
        isQuizStarted, hasSubmitted,
        handleStartQuiz, handleReset,
        error, isLoading
    } = useApp()

    if (error) return (
        <div className="border">
            <p>{error}</p>
            <button onClick={handleReset}>Back to home</button>
        </div>
    )

    if (isQuizStarted) return <Quiz results={quizData} onReset={handleReset}/>

    return (
        <div className="border">
            {isLoading ? <div className="spinner"/> : (
                <>
                    <main>
                        <h1>Quizzical</h1>
                        <select value={numQuestions} onChange={e => setNumQuestions(e.target.value)}>
                            <option value="">Select amount</option>
                            {QUESTION_OPTIONS.map(n => (
                                <option key={n} value={n}>{n} questions</option>
                            ))}
                        </select>
                        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                            <option value="">Select difficulty</option>
                            {DIFFICULTY_OPTIONS.map(d => (
                                <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
                            ))}
                        </select>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="">Select category</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </main>
                    {hasSubmitted && (!difficulty || !category || !numQuestions) && (
                        <div id="warning-container">
                            <h2 id="warning-text">Please select all options!</h2>
                            <img src={sademoji} id="sad-img"/>
                        </div>
                    )}
                    <button className="start-btn" onClick={handleStartQuiz}>
                        Start quiz
                    </button>
                </>
            )}
        </div>
    )
}