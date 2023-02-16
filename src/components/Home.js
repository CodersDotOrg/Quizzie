import React from 'react'
import Form from './Form'

export default function Home() {

    
    function onSubmit(e) {
        e.preventDefault();
        console.log('submitted');
    }


  return (
    <>
      <Form onSubmit={onSubmit}/>
    </>
  )
}
