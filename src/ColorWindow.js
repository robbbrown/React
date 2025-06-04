import React from 'react'

const ColorWindow = ({color}) => {
  return (
    <div className='color-box'
    style={{backgroundColor:`${color}`}}>
      <p>{color.length > 1 ? color : 'Empty Value'}</p>
    </div>
  )
}

export default ColorWindow