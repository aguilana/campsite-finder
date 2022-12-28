import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleCampground = () => {
    const { id } = useParams()
    const singleCampground = useSelector()
    const dispatch = useDispatch()
    
    useEffect(()=>{

    }, [])

  return (
    <div>SingleCampground</div>
  )
}

export default SingleCampground