import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {
    
    const fetchPost = (queryData) => {
        const id = queryData.queryKey[1]
        return axios.get(`http://localhost:3004/posts/${id}`)
    }

    const {isLoading, data, isError, error, refetch} = useQuery({
        queryKey:['posts', 1],
        queryFn: fetchPost,
        retry: 1,
        select: (data)=>{
            return data.data // data.data만 뽑아서 보여주세요
        },
        enabled: false, // 처음에 데이터 안불러옴 (true가 기본값)
    });
    console.log("data:" , data, "isLoading?" , isLoading)
    console.log("error:", isError, error)

  // 로딩 시에
  if(isLoading){
    return <h1>Loading...</h1> // 로딩 스피너 보여주거나 하면 됨
  }
  // 에러가 났을 때
  if(isError){
    return <h1>{error.message}</h1>
  }
  // 로딩, 에러 둘다 안났을 떄 data를 보여준다
  return (
    <div>
      ReactQueryPage
      {/* {data?.map((item)=>(
        <div>{item.title}</div> // data의 data에서 title만 뽑아서 보여준다
      ))} */}
      <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage
