import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

export default function CustomHookApp() {
    const [name, setName, removeName] = useLocalStorage('name', 'mike')
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={removeName}>Remove Name from Local Storage</button>
    </div>
  )
}
