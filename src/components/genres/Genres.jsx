import React from 'react'
import { useSelector } from 'react-redux'

const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.home)
  return (
    <div className='genres'>
        {data?.map((g)=>{
            return
        })}
    </div>
  )
}

export default Genres