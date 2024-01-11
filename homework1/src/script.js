const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer)
import {CARS} from './data.js'

const App = () => {
  return <React.Fragment>
    <h1>Car Specs</h1>
    <CarTable cars={CARS}/>
  </React.Fragment>
}
const CarModel = ({model}) => {
  return <React.Fragment>
    <tr className='models'>
      <td>
        <ul>
          <li>Version: {model[`version`]}</li>
          <li>Year: {model[`year`]}</li>
          <li>Horsepower: {model[`horsepower`]}</li>
          <li>Engine: {model[`engine`]}</li>
        </ul>
      </td>
    </tr>
  </React.Fragment>
}

const CarModels = ({brand}) => {
  return <React.Fragment>
    {brand[`models`].map((model, index) => {
      return <React.Fragment key={index} >
        <tr key={index} className='models'>
          <td>{model[`name`]}</td>
        </tr>
        {model[`collection`].map(
          (modelData, index) => <CarModel
            key={index}
            model={modelData}/>
        )}
      </React.Fragment>
    })}
  </React.Fragment>
}

const CarBrand = ({brand}) => {
  return <tr>
    <td>{brand[`brand`]}</td>
  </tr>
}

const CarTable = ({cars}) => {
  return <table>
    <tbody>
    {cars.map((item, index) => {
      return <React.Fragment key={index}>
        <CarBrand brand={item}/>
        <CarModels brand={item}/>
      </React.Fragment>
    })}
    </tbody>
  </table>
}

root.render(<App />)