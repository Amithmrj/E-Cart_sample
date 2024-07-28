//custom hook to do api call

import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data, setData]= useState(null)

    useEffect(()=>{
        fetch(url)  .then(res=>{
            res.json()                                  //to remove unnecessary items
            .then(result=>{setData(result.products)})
            
        })
    },[])
    return data
}

export default useFetch;