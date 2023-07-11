//React
import { useState, useCallback, useEffect } from 'react'

//CSS
import './App.css'

//Components
import StartScreen from './Components/StartScreen'
import Game from './Components/Game'
import GameOver from './Components/GameOver'

//Data
import {wordsList} from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setSocre] = useState(0)

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
  
    console.log(category, word)

    return {word, category}
  }

  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();

    //Create an array of letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toUpperCase())
    console.log(wordLetters)

    //Fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  } 

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='App'>      
        {gameStage === "start" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && 
        (<Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        />)}
        {gameStage === "end" && <GameOver retry={retry}/>}
      </div>
    </>
  )
}

export default App
