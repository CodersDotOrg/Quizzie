import React from 'react'

export default function Option(props) {
    return (
        <div>
            <div className="card mt-5" >
                <label class="btn btn-dark active">
                    <div className="card-body">
                        <input type="radio" name="options" id={props.ind} autocomplete="off" checked /> {props.opt}
                    </div>
                </label>
            </div>
        </div>
    )
}
