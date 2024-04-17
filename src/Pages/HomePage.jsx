import React from 'react'
import { usePostQuery } from '../hooks/usePosts'

const HomePage = () => {
const {data, isLoading, isError, error, refetch} =  usePostQuery()

  return (
    <div>
      ReactQueryPage
      {data?.map((item)=>(
        <div>{item.title}</div> // data의 data에서 title만 뽑아서 보여준다
      ))}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  )
}

export default HomePage
