import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  const obj={
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
};

const obj2=[...obj.incorrectAnswers, obj.correctAnswer];
obj2.sort();

  return (
    <div className="App">
      <Header />
      <Body obj={obj} obj2={obj2}/>
      <Footer/>
    </div>
  );
}

export default App;
