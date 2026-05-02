# Quizzical 🧠

A trivia quiz app built with React that lets you customize your quiz by selecting a category, difficulty, and number of questions.

LIVE DEMO: https://tonyquizzicle.netlify.app/ 

## Features

- Choose from a wide range of trivia categories
- Select difficulty and number of questions
- Randomized answer order
- Correct/incorrect answer highlighting
- Score display with play again option
- Loading spinner and error handling

## Tech Stack

- [React](https://react.dev/) with Vite
- [clsx](https://github.com/lukeed/clsx) for conditional classNames
- [Open Trivia DB API](https://opentdb.com/api_config.php)
- Custom hooks (`useApp`, `useQuiz`) for clean separation of logic and UI

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/quizzical.git

# Navigate into the project
cd quizzical

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Project Structure

```
src/
├── assets/
├── components/
│   ├── App.jsx
│   ├── Quiz.jsx
│   └── Question.jsx
└── js/
    ├── useApp.js
    ├── useQuiz.js
    └── utils.js
```

## Future Improvements

- Timer per question
- High score tracking
- Transition animations between screens
