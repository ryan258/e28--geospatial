import React from 'react'
import Marks from './components/Marks'
import { useData } from './hooks/useData'
// import { message } from './utils/message'
// useCallback - good for adding event listeners only once
// - arg0 - function you want to control
// - arg1 - [array, of, dependencies] - things it needs to run

const width = 960
const height = 500

const App = () => {
  const data = useData()

  if (!data) {
    return <pre>'Loading...'</pre>
  }

  return (
    <svg width={width} height={height}>
      <Marks //
        data={data}
      />
    </svg>
  )
}

export default App
