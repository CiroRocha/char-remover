import React, { useState, useEffect } from 'react'

import Styles from './styles.css'

const Input = () => {
  const minChar = 4
  const [currentString, setCurrentString] = useState('')

  const handleChange = (evn) => {
    setCurrentString(evn.target.value)
  }

  const showSeparatedString = (string) => {
    let i = 0
    const separatedString = string.split('').map((char, index) => {
      return <p key={index} style={{padding: '0 0.15rem'}} onClick={() => handleDelete(index)} >{char}</p>
    });
    return separatedString
  }

  const handleDelete = ( index ) => {
    const letter = currentString.split('')
    letter.splice(index, 1)
    setCurrentString(letter.join(''))
  }

  return (
    <>
      <input onChange={(e) => handleChange(e)} value={currentString} />
      {
        currentString.length >= minChar ?
        <h5>You wrote enough :)</h5> :
        <h5>You wrote {currentString.length} letters, you need to write at least {minChar - currentString.length} more letters</h5>
      }

      <div style={{display: 'flex'}}>{showSeparatedString(currentString)}</div>
    </>
  )
}

export default Input