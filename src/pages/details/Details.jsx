import React from 'react'
import './style.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailBanner/DeatailBanner'

const Details = () => {
  // const { mediaType, id } = useParams();
  // console.log(mediaType, id);
  // const {data, loading} = useFetch(`/${mediaType}/${id}`)
  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details