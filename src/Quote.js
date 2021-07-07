const Quote = ({ data, quieroSubirInfo }) => {
  const msg = 'Tu esposa salio, aprovecha!!'
  if (!data.name) {
    return null
  }

  return (
    <header className='App-header'>
      {data.value} -{' '}
      <button
        onClick={() => {
          quieroSubirInfo(msg)
        }}
      >
        Avisar a mi papá
      </button>
    </header>
  )
}

export default Quote
