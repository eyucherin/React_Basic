import React from 'react'
import {useReducer} from 'react'
import personReducer from './reducer/mentor.js'

const initialPerson = {
  name: 'Elizabeth',
  title: 'SWE',
  mentors: [
    {
      name: 'Bob',
      title: 'Senior SWE',
    },
    {
      name: 'James',
      title: 'Senior SWE',
    },
  ],
};

export default function AppMentors() {
  const [person,dispatch] = useReducer(personReducer,initialPerson)

  const handleUpdate = () => {
    const prev = prompt(`Whose name do you want to change?`)
    const current = prompt(`What is the new name?`)
    dispatch({type:'updated',prev,current})
  }

  const handleAdd = () => {
    const name = prompt(`What is the name of the mentor?`)
    const title = prompt(`What is the title of the mentor?`)
    dispatch({type:'added',name,title})
  }

  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`)
    dispatch({type:'deleted',name})
  }

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentors are:</p>
      <ul>
        {person.mentors.map((mentor,index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change Mentor's Name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  )
}
