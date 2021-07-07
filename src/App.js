import Quote from './Quote'
import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMeAQuote = async () => {
      const url = 'https://api.chucknorris.io/jokes/random'
      const promise = await fetch(url).then(res => res.json())
      setData({ ...promise, name: 'El profe Charly' })
      setIsLoading(false)
    }
    setIsLoading(true)
    fetchMeAQuote()
  }, [])

  useEffect(() => {
    setData({
      name: 'Hola mundo'
    })
  }, [])

  const claroQueSiHijo = data => {
    console.log(data)
  }

  return (
    <div className='App'>
      {isLoading
        ? 'Estoy agarrando señal, 1 momento....'
        : data && <Quote data={data} quieroSubirInfo={claroQueSiHijo} />}
    </div>
  )
}

export default App
