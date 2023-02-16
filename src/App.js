import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Home from './components/Home';
import Parent from './components/Parent';
import UseEffectAPI from './tp/UseEffectAPI';

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
  },{
    "category": "History",
    "id": "622a1c377cc59eab6f950429",
    "correctAnswer": "Three Mile Island",
    "incorrectAnswers": [
      "Chernobyl",
      "Fukushima",
      "Jaslovské Bohunice"
    ],
    "question": "In March 1979, where did a major nuclear accident occur?",
    "tags": [
      "history"
    ],
    "type": "Multiple Choice",
    "difficulty": "hard",
    "regions": [],
    "isNiche": false
  }];

  const obj2 = [...obj[0].incorrectAnswers, obj[0].correctAnswer];
  obj2.sort();
  
  const curr = 0;
  return (
    <div className="App">
      <Header />
      {/* <Body obj={obj[0]} obj2={obj2}/> */}
      
      {/* <Home /> */}
      {/* <Parent quiz={obj} curr={curr}/>
      <Footer /> */}




      {/* different method to fetch api data */}
      <UseEffectAPI/>
    </div>
  );
}

export default App;
