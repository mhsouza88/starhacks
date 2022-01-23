import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
    .get(url , {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        window.alert("Error!")
      })
  }, [url])

  return (data)
}

export default useRequestData