import React, { useState, useEffect } from 'react'

import Styles from './styles.css'

const Input = () => {
  const minChar = 4
  const [currentString, setCurrentString] = useState('')
  let restString = ''
  // const [restString, setRestString] = useState('')

  const handleChange = (evn) => {
    setCurrentString(evn.target.value)
    // setRestString(...currentString)
  }

  const handleDelete = (string) => {
    console.log()
  }

  useEffect(() => {
    restString = [...currentString]
    // setRestString(...currentString)
    console.log(restString)
  }, [currentString])

  return (
    <>
      <input onChange={(e) => handleChange(e)} />
      {
        currentString.length >= minChar ?
        <h5>You wrote enough :)</h5> :
        <h5>You wrote {currentString.length} letters, you need to write at least {minChar - currentString.length} more letters</h5>
      }

      <p>{restString}</p>
    </>
  )
}

export default Input