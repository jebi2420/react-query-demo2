import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {
    
    const fetchPost = () => {
        return axios.get('http://localhost:3004/posts')
    }

    const {isLoading, data} = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost,
    });
    console.log("data:" , data, "isLoading?" , isLoading)

  return (
    <div>
      ReactQueryPage
    </div>
  )
}

export default ReactQueryPage
