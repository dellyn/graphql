import React, { useEffect } from 'react'
import { structureData } from './redux/actionСreators'
import { useDispatch, useSelector } from 'react-redux'
import { SET_DATA } from './redux/actionTypes'
import Race from './components/Race/Race'

import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const getData = () => {
    let socket = new WebSocket('ws://testapi.marit.expert:3004/')
    socket.onopen = () => {
      socket.send('{cmd:"get_list"}')
    }
    socket.onmessage = (event) => {
      dispatch({ type: SET_DATA, payload: structureData(event.data) })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!data) return <div className="status-loading">Loading...</div>

  return (
    <div className="App">
      <div className="container">
        <div className="logo">marit.expert</div>
        <div className="race-wrapper d-flex">
          {data.map((race) => {
            const genId = race.persons.length + 1
            return <Race key={race.id} race={race} genId={genId} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
