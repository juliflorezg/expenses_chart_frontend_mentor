import { useState, useEffect } from 'react'
import './App.css'
import Balance from './components/Balance'
import MainContent from './components/MainContent'

function App() {
  const [data, setData] = useState([])

  const [currentWeekDay, setCurrentWeekDay] = useState('')

  console.log(
    '%cApp rendering!',
    'color:yellow;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold'
  )

  useEffect(() => {
    const getDataFromJSON = async () => {
      const response = await fetch('./data.json')

      const responseData = await response.json()

      setData(responseData)

      console.log(response)
      console.log(responseData)
      // console.log(data)
    }

    getDataFromJSON()
  }, [])

  useEffect(() => {
    const date = new Date()
    console.log(date.getDay())
    console.log(date.toDateString().slice(0, 3))

    const weekDay = date.toDateString().slice(0, 3).toLowerCase() // mon, tue, wed ...

    setCurrentWeekDay(weekDay)
  }, [])

  const changeCurrentDay = day => {
    setCurrentWeekDay(day)
  }

  return (
    <section className="App">
      <Balance />
      <MainContent
        days={data}
        currentWeekDay={currentWeekDay}
        maxAmount={Math.max(...data.map(day => day.amount))}
        changeCurrentDay={changeCurrentDay}
      />
    </section>
  )
}

export default App
