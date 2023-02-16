// import react from "react";
import { useState } from "react";
import quizContext from "./quizContext";

const QuizState = (props) => {
  const quizInitial = [];
  const [quiz, setQuiz] = useState(quizInitial);

  const getQuiz = async ()=>{
    //fetches all quiz question from api
    const response = await fetch(`https://the-trivia-api.com/api/questions?limit=20&categories=science,history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json =  await response.json();
      console.log(json);
      await setQuiz(json);
      console.log(quiz);
  }

  return (
    <quizContext.Provider
      value={{quiz,getQuiz}}>
      
    </quizContext.Provider>
  );
};

export default QuizState;
