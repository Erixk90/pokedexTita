import React from 'react'
import '../App.css'
import { hourglass } from 'ldrs'

hourglass.register()


const Loading = () => {
  return (
    <div className='loading'>
<l-hourglass
  size="100"
  bg-opacity="0.1"
  speed="1.75" 
  color="black" 
></l-hourglass>
    </div>
  )
}

export default Loading