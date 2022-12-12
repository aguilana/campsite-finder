import React from 'react'
import { useParams } from 'react-router-dom'

const Campus = () => {

    const { campusId } = useParams()
  return (
    <div>Campus with campusId: {campusId}</div>
  )
}

export default Campus