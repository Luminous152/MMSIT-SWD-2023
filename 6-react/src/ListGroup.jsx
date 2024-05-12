import React from 'react'

import ListTemplate from './ListTemplate'
import EmptyList from './EmptyList'

const ListGroup = () => {
    const tasks = [
        {
            id : 1,
            job : "read js book",
            isDone : false,
        },
        {
            id : 2,
            job : "meet with fri",
            isDone : true,
        },
        {
            id : 3,
            job : "study japan language",
            isDone : true,
        },
        {
            id : 4,
            job : "sleep early",
            isDone : false,
        }
    ]

  return (
    <div id="listGroup">
     <EmptyList />
     {tasks.map(task => 
     <div 
     className= {`
        ${
            task.isDone && "opacity-25 scale-90"
        }
       border bg-slate-400 border-slate-400 p-2 mb-3 rounded-lg`}
     key={task.id}>
        <p>{task.id}/{task.isDone ? 'done' : 'not yet'}</p>
       <p>{task.job}</p>
     
     </div> )}
    </div>
  )
}

export default ListGroup