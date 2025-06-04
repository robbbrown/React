import React from 'react'

const SearchBox = ({color, setColor, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
    <input 
      autoFocus
      type='text'
      id='searchColor'
      placeholder='Add color name'
      value={color}
      onChange={(e) => setColor(e.target.value)} 
      />
    </form>
  )
}

export default SearchBox