import React from 'react'

export default function Profile(props) {
  return (
    <div className = "profile">
        <img className = "photo" src = {props.img}></img>
        <h3>{props.name}</h3>
        <h3>{props.career}</h3>

    </div>
  )
}


