import ChildItem from './ChildItem'
import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchMeAQuote = async () => {
      const url = 'https://api.chucknorris.io/jokes/categories'
      const promise = await fetch(url).then(res => res.json())
      setData(promise)
    }
    fetchMeAQuote()
  }, [])

  const lista = data.map(value => <ChildItem key={value} value={value} />)

  return (
    <div className='App'>
      <header className='App-header'> {lista} </header>
    </div>
  )
}

export default App
