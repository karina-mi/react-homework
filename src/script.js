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
    {brand[`models`].map(model => {
      return <React.Fragment>
        <tr key={crypto.randomUUID()} className='models'>
          <td>{model[`name`]}</td>
        </tr>
        {model[`collection`].map(
          modelData => <CarModel
            key={crypto.randomUUID()}
            model={modelData}/>
        )}
      </React.Fragment>
    })}
  </React.Fragment>
}

const CarBrand = ({brand}) => {
  return <tr key={crypto.randomUUID()}>
    <td>{brand[`brand`]}</td>
  </tr>
}

const CarTable = ({cars}) => {
  return <table>
    <tbody>
    {cars.map((item) => {
      return <React.Fragment>
        <CarBrand key={crypto.randomUUID()} brand={item}/>
        <CarModels key={crypto.randomUUID()} brand={item}/>
      </React.Fragment>
    })}
    </tbody>
  </table>
}

root.render(<App />)