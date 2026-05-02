import {useState, useEffect} from 'react'

export function useApp(){
    const [numQuestions, setNumQuestions] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [quizData, setQuizData] = useState([])
    const [isQuizStarted, setIsQuizStarted] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then(res => res.json())
            .then(data => setCategories(data.trivia_categories))
    }, [])

    const handleStartQuiz = async (e) => {
        e.preventDefault()
        if (!difficulty || !category || !numQuestions) {
            setHasSubmitted(true)
            return
        }
        setIsLoading(true)
        
        
        let apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}`
        if (difficulty) apiUrl += `&difficulty=${difficulty}`
        if (category) apiUrl += `&category=${category}`
        const res = await fetch(apiUrl)
        const data = await res.json()
        
        setIsLoading(false)
        if (data.response_code !== 0) {
            setError("Not enough questions in the Quiz trivia database, please select fewer questions or another topic!")
            return}

        setQuizData(data.results)
        setIsQuizStarted(true)
    }

    const handleReset = () => {
        setIsQuizStarted(false)
        setQuizData([])
        setNumQuestions("")
        setDifficulty("")
        setCategory("")
        setHasSubmitted(false)
        setError("")
    }

    return {
        numQuestions, setNumQuestions,
        difficulty, setDifficulty,
        category, setCategory,
        categories, quizData,
        isQuizStarted, hasSubmitted,
        handleStartQuiz, handleReset,
        error, isLoading
    }
}