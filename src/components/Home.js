import React from 'react'
import Form from './Form'

export default function Home() {

    
    function onSubmit(e) {
        e.preventDefault();
        console.log('submitted');
    }


  return (
    <>
<<<<<<< HEAD
      <Form onSubmit={onSubmit}/>
=======
      <Form />
>>>>>>> ca8416649977eaefe601d8df6212a0034d0387b1
    </>
  )
}
