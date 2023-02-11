import React from 'react'
import Option from './Option'

export default function Question(props) {
    return (
        <div>
            <div className="card mt-5" >
                <div className="card-body">
                    <h5 className="card-title">{props.que}</h5>
                </div>
            </div>
        </div>
    )
}
