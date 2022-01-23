import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url, props) => {
  const [data, setData] = useState(initialData)
  const [randomIndex, setRandomIndex] = React.useState(Math.floor(Math.random()*71))  

  const getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * max) + min);
  }

  useEffect((data) => {
    const index = getRandomNumber(0, 71)
      setRandomIndex(index)
    },[]) 

  useEffect(() => {
    axios
    .get(url , {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        setData(res.data[randomIndex])
      })
      .catch((err) => {
        window.alert(err.message)
        console.log(err.message)
      })
  }, [url])

  return (data)
}

export default useRequestData