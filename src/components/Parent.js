import React from 'react'
import Body from './Body'
import { useEffect } from 'react';

export default function Parent(props) {
    // props.quiz array of objects
    let obj2;
    function fun1(obj1) {
        obj2 = [...obj1.incorrectAnswers, obj1.correctAnswer];
        obj2.sort();
    }
    // useEffect(() => {
    //     console.log(props.currentQuestion);
    // }, [props.currentQuestion])


    return (
        <>
            {/* {console.log(props.quiz)} */}
            {/* {props.quiz.map((obj) => { */}
                {fun1(props.quiz[props.curr])}
                {/* console.log(obj);
                console.log(obj2); */}
                {/* return (
                    <>
                    <Body obj={obj} obj2={obj2} />
                        
                    </>
                )
            })} */}
            <Body obj={props.quiz[props.curr]} obj2={obj2} curr={props.curr}/>

        </>
    )
}
