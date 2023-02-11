import React from 'react'
import Form from './Form'
import {useEffect, useContext, useState } from 'react';
import quizContext from '../context/quizContext';
import { useNavigate } from 'react-router-dom';
// {

//   https://the-trivia-api.com/api/questions?categories=film_and_tv,food_and_drink,general_knowledge&limit=7&region=IN&difficulty=easy
// }
export default function Home(props) {
  const navigate = useNavigate();
  const {quiz,setQuiz} = props.quiz;
  const getQuiz = async (params)=>{
    //fetches all quiz question from api
    const response = await fetch(`https://the-trivia-api.com/api/questions?`+ new URLSearchParams(params), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json =  await response.json();
      console.log(json);
      // setQuiz(json);
      await setQuiz(json);
      console.log(quiz);
      navigate('/quiz')
  }
    function onSubmit(e) {
        e.preventDefault();
        //object
        let cat = '';
        // console.log(e.target.category.length)
        for(let i=0;i<e.target.category.length; i++){
          if(e.target.category[i].checked)
          {
            cat+=',';
            cat+=e.target.category[i].value;
            
          }
        }
        cat = cat.substring(1);
        let params = {
          limit: e.target.quenumber.value,
          difficulty: e.target.level.value,
          category:cat
        }
        try {
          getQuiz(params);
          // console.log(params)
          
        } catch (error) {
          console.log(error)
        }
    }


  return (
    <>
      <div className="container"><Form onSubmit={onSubmit}/></div>
      
    </>
  )
}
