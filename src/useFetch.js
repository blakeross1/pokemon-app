import {useState,useEffect} from 'react'
import axios from 'axios'

function useFetch(url, param) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() =>{

        setLoading(true)
        axios
        .get(url, {params: {id: param}})
        .then((res) => {
            setData(res.data)
            
        })
        .catch((err) => {
            setError(err)
        })
        .finally (() => {
            setLoading(false)
        })
        
    },[url, param])
    
  return {data,loading,error}
}

export default useFetch