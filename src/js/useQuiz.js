// useQuiz.js
import { useState, useMemo } from 'react'

export function useQuiz(results) {
    const [selectedAnswers, setSelectedAnswers] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const shuffledQuestions = useMemo(() => {
        return results.map(item => {
            const allAnswers = [...item.incorrect_answers, item.correct_answer]
            allAnswers.sort(() => Math.random() - 0.5)
            return { ...item, allAnswers }
        })
    }, [])

    const handleAnswer = (questionIndex, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: prev[questionIndex] === answer ? "" : answer
        }))
    }

    const allAnswered = Object.keys(selectedAnswers).length === results.length
        && Object.values(selectedAnswers).every(answer => answer !== "")

    const score = shuffledQuestions.filter((item, index) => 
        selectedAnswers[index] === item.correct_answer
    ).length

    return { shuffledQuestions, selectedAnswers, isSubmitted, setIsSubmitted, handleAnswer, allAnswered, score }
}