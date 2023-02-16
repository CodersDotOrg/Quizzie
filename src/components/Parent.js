import React from 'react'
import Body from './Body'
import { useEffect } from 'react';

export default function Parent(props) {

    // props.quiz array of objects
    // useEffect(() => {
    //     console.log(props.currentQuestion);
    // }, [props.currentQuestion])
    console.log(props.quiz)
    return (
        <>
            <Body quiz={props.quiz} />
            {/* {props.quiz.map((currentQuesionObject) => {
                { fun1(props.quiz[props.curr]) }
                return (
                    <>
                        <Body currentQuesionObject={currentQuesionObject} randomOptionArray={randomOptionArray} />
                    </>
                )
            })} */}
        </>
    )
}
