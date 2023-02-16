import React, { useEffect, useState } from 'react'
import Question from './Question'
import Option from './Option'
import Submit from './Submit'
let curr = 0;

export default function Body(props) {
    console.log(props.quiz)

    const [questionObject, setQuestionObject] = useState({
        question: props.quiz[curr].question,
        option1: props.quiz[curr].incorrectAnswers[0],
        option2: props.quiz[curr].correctAnswer,
        option3: props.quiz[curr].incorrectAnswers[1],
        option4: props.quiz[curr].incorrectAnswers[2]
    });

    const changeQuestion = () => {
        curr++;
        let randomOptionArray = [...props.quiz[curr].incorrectAnswers, props.quiz[curr].correctAnswer];
        randomOptionArray.sort();
        setQuestionObject({
            question: props.quiz[curr].question,
            option1: randomOptionArray[0],
            option2: randomOptionArray[1],
            option3: randomOptionArray[2],
            option4: randomOptionArray[3]
        })
    }

    console.log(questionObject);
    // let randomOptionArray;

    // useEffect(() => {
    //     function fun1(currentQuestionObject) {
    //         randomOptionArray = [...currentQuestionObject.incorrectAnswers, currentQuestionObject.correctAnswer];
    //         randomOptionArray.sort();
    //     }
    //     fun1(props.currentQuestionObject)
    // }, [])

    // function fun1(currentQuestionObject) {
    //     randomOptionArray = [...currentQuestionObject.incorrectAnswers, currentQuestionObject.correctAnswer];
    //     randomOptionArray.sort();
    // }
    // let randomOptionArray = [...props.currentQuestionObject.incorrectAnswers, props.currentQuestionObject.correctAnswer]

    // function onsubmit(e) {
    //     e.preventDefault();
    //     props.curr++;
    //     console.log('submitted');
    // }
    return (
        <div className='container'>
            <div className="card mt-5" >
                <div className="card-body">
                    <Question que={questionObject.question} />
                    <form >
                        <div className='row'>
                            <div className='col-6'>
                                <Option opt={questionObject.option1} ind={1} />
                            </div>
                            <div className='col-6'>
                                <Option opt={questionObject.option2} ind={2} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <Option opt={questionObject.option3} ind={3} />
                            </div>
                            <div className='col-6'>
                                <Option opt={questionObject.option4} ind={4} />
                            </div>
                        </div>
                        <button className='btn btn-success btn-lg btn-block mt-3'>Submit</button>
                    </form>
                    <button className='btn btn-success btn-lg btn-block mt-3' onClick={changeQuestion}>next</button>
                </div>
            </div>
        </div>
    )
}
