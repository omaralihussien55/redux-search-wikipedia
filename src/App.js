import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Containers from './components/Container'
import { search } from './redux/searchSlice'
const App = () => {
const dispatch = useDispatch()

  return (
    <div className='bg-white'>
    <Containers/>
    </div>
  )
}

export default App