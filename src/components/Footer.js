import React from 'react'

export default function Footer() {
  
    let footstyle = {
        position: "relative",
        top: "77vh",
        width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footstyle} >
            <p className='text-center' >Copyright @QuizBox-SJ</p>
        </footer>
    )
  
}
