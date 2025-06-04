import React from 'react'

const Footer = ({length}) => {


  return (
    <footer>
      <p>{length === 1 ? `Item` : 'Items'} = {length}</p>
    </footer>
  )
}

export default Footer