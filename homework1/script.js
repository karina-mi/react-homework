var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
import { CARS } from './data.js';

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h1',
      null,
      'Car Specs'
    ),
    React.createElement(CarTable, { cars: CARS })
  );
};
var CarModel = function CarModel(_ref) {
  var model = _ref.model;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'tr',
      { className: 'models' },
      React.createElement(
        'td',
        null,
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            'Version: ',
            model['version']
          ),
          React.createElement(
            'li',
            null,
            'Year: ',
            model['year']
          ),
          React.createElement(
            'li',
            null,
            'Horsepower: ',
            model['horsepower']
          ),
          React.createElement(
            'li',
            null,
            'Engine: ',
            model['engine']
          )
        )
      )
    )
  );
};

var CarModels = function CarModels(_ref2) {
  var brand = _ref2.brand;

  return React.createElement(
    React.Fragment,
    null,
    brand['models'].map(function (model, index) {
      return React.createElement(
        React.Fragment,
        { key: index },
        React.createElement(
          'tr',
          { key: index, className: 'models' },
          React.createElement(
            'td',
            null,
            model['name']
          )
        ),
        model['collection'].map(function (modelData, index) {
          return React.createElement(CarModel, {
            key: index,
            model: modelData });
        })
      );
    })
  );
};

var CarBrand = function CarBrand(_ref3) {
  var brand = _ref3.brand;

  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      brand['brand']
    )
  );
};

var CarTable = function CarTable(_ref4) {
  var cars = _ref4.cars;

  return React.createElement(
    'table',
    null,
    React.createElement(
      'tbody',
      null,
      cars.map(function (item, index) {
        return React.createElement(
          React.Fragment,
          { key: index },
          React.createElement(CarBrand, { brand: item }),
          React.createElement(CarModels, { brand: item })
        );
      })
    )
  );
};

root.render(React.createElement(App, null));