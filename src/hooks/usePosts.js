import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPost = () => {
   // const id = queryData.queryKey[1]
    return axios.get(`http://localhost:3004/posts`)
}

export const usePostQuery = () => {
    return useQuery({
        queryKey:['posts'],
        queryFn: () => fetchPost(),
        retry: 1,
        select: (data)=>{
            return data.data // data.data만 뽑아서 보여주세요
        },
        //enabled: false, // 처음에 데이터 안불러옴 (true가 기본값)
        })
}
