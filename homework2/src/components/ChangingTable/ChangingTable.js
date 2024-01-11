import {useEffect, useState} from 'react'
import ANIMALS from './data'
import "./index.css"

const ChangingTable = () => {

  const [data, setData] = useState(ANIMALS)
  const [toSelect, setToSelect] = useState([...Array(data.length).keys()])
  const [halfProcessed, setHalfProcessed] = useState(false)
  const [fullyProcessed, setFullyProcessed ] = useState(false)

  useEffect(() => {
      const selectNumber = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * toSelect.length)
        const pickedNumber = toSelect[randomIndex]

        console.log("The number randomly generated is ", randomIndex)
        console.log("Picked number is", pickedNumber)
        toSelect.splice(randomIndex, 1)
        console.log(toSelect)

        setToSelect(toSelect)
        setData(prevState => prevState.map((item, index) => {
          if (index === pickedNumber) {
            item.selected = true
          }

          return item
        }), () => {
          if (!toSelect.length && !fullyProcessed){
            console.log("fully")
            setFullyProcessed(true)
          }

          console.log(toSelect.length < (data.length / 2))
          if (toSelect.length < (data.length / 2) && halfProcessed){
            console.log("half")
            setHalfProcessed(true)
          }
        })
      }, 2000)
      return () => clearInterval(selectNumber)
    }, [toSelect],)

  return <table className={fullyProcessed ? 'fully': halfProcessed ? 'half': null}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Icon</th>
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => <tr
        key={index}
        className={item.selected ? "selected" : ""}
      >
        <td>{item.type}</td>
        <td>{item.icon}</td>
      </tr>)}
      </tbody>
    </table>
}

export default ChangingTable
