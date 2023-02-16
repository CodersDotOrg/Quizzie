import React from 'react'
import Question from './Question'
import Option from './Option'
import Submit from './Submit'

export default function Body(props) {


    function onsubmit(e) {
        e.preventDefault();
        props.curr++;
        console.log('submitted');
    }
    return (
        <div className='container'>
            <div className="card mt-5" >
                <div className="card-body">
                    <Question que={props.obj.question} />
                    <form onSubmit={onsubmit}>
                        <div className='row'>
                            <div className='col-6'>
                                <Option opt={props.obj2[0]} ind={1} />
                            </div>
                            <div className='col-6'>
                                <Option opt={props.obj2[1]} ind={2}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <Option opt={props.obj2[2]} ind={3}/>
                            </div>
                            <div className='col-6'>
                                <Option opt={props.obj2[3]} ind={4}/>
                            </div>
                        </div>
                        {/* <button className='btn btn-success btn-lg btn-block mt-3'>Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
