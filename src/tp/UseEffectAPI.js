import React, { useState, useEffect, useNavigate } from 'react'
import Question from '../components/Question';
import Option from '../components/Option';

export default function useEffectAPI() {

    const [users, setUsers] = useState([]);

    // method to fetch data from API using fetch 
    // const getuser = async () => {
    //     const response = await fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history');
    //     const data = await response.json();
    //     console.log(data);
    //     setUsers(data);
    // }

    // useEffect(() => {
    //     getuser();
    // }, []);



    // Another method to access data from api
    useEffect(() => {
        fetch("https://the-trivia-api.com/api/questions?limit=20&categories=science,history")
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [])


    // AJ's method to access data from api
    // const navigate = useNavigate();
    // const { quiz, setQuiz } = useState([]);
    // const getQuiz = async (params) => {
    //     //fetches all quiz question from api
    //     const response = await fetch(`https://the-trivia-api.com/api/questions?` + new URLSearchParams(params), {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     const json = await response.json();
    //     console.log(json);
    //     // setQuiz(json);
    //     await setQuiz(json);
    //     console.log(quiz);
    //     navigate('/quiz')
    // }

    function onsubmit() {

    }

    return (
        <div>
            {/* {console.log(users)} */}

            {users.map((obj) => {
                return (
                    <>
                        <div className='container'>
                            <div className="card mt-5" >
                                <div className="card-body">
                                    <Question que={obj.question} />
                                    <form onSubmit={onsubmit}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <Option opt={obj.correctAnswer} ind={1} />
                                            </div>
                                            <div className='col-6'>
                                                <Option opt={obj.incorrectAnswers[0]} ind={2} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <Option opt={obj.incorrectAnswers[1]} ind={3} />
                                            </div>
                                            <div className='col-6'>
                                                <Option opt={obj.incorrectAnswers[2]} ind={4} />
                                            </div>
                                        </div>
                                        <button className='btn btn-success btn-lg btn-block mt-3'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
