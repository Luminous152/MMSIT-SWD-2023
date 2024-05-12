import React from 'react'
import undraw from './assets/Images/undraw.svg'

const EmptyList = () => {
  return (
    <div className="empty-stage py-5 hidden last:flex justify-center flex-col items-center gap-3">
    <img width={100} src={undraw} alt="no-data" />
    <p>There is no List</p>
  </div>
  )
}

export default EmptyList