import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {

    const {studentId} = useParams();


  return (
    <>
        <h1>STUDENT NAME with student id: {studentId}</h1>
        <h2>IMAGE</h2>
        <h2>ADDRESS</h2>
        <h2>DESCRIPTION</h2>
    </>
  )
}

export default Student