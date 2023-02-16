import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Home from './components/Home';
import { useState } from 'react';
import QuizState from './context/quizState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const obj = [{
    "category": "Sport & Leisure",
    "id": "62417d780f96c4efe8d773ca",
    "correctAnswer": "Orlando Magic",
    "incorrectAnswers": [
      "Orlando Colts",
      "Orlando Timbers",
      "Orlando Raptors"
    ],
    "question": "Which of these is a basketball team based in Orlando?",
    "tags": [
      "basketball",
      "nba",
      "usa",
      "sport"
    ],
    "type": "Multiple Choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  }];
  const quizInitial = [];
  const [quiz, setQuiz] = useState(quizInitial);

  const obj2 = [...obj[0].incorrectAnswers, obj[0].correctAnswer];
  obj2.sort();

  const curr = 0;
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home quiz={{ quiz, setQuiz }} />} />
          <Route exact path="/quiz" element={<Body obj={obj} obj2={obj2} />} />
        </Routes>
      </div>

      <Footer />
    </Router>

  );
}

export default App;
