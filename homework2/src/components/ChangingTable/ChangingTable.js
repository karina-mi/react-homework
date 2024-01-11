import {Component} from 'react'
import "./index.css"

export default class ChangingTable extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    data: [...this.props.data],
    toSelect: [...Array(this.props.data.length).keys()],
    tableClassName: null,
  }

  componentDidMount() {
    const selectItem = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.state.toSelect.length)
      const pickedNumber = this.state.toSelect[randomIndex]

      this.state.toSelect.splice(randomIndex, 1)

      const updatedData = this.state.data.map((item, index) => {
        if (index === pickedNumber) {
          item.selected = true
        }
        return item

      })

      this.setState({
        ...this.state,
        data: [...updatedData],
      }, () => {
        !this.state.toSelect.length && clearInterval(selectItem)

        if (!this.state.toSelect.length) {
          this.setState({
            ...this.state,
            tableClassName: 'fully',
          })
          return
        }

        if (this.state.toSelect.length === Math.round(this.props.data.length / 2) - 1) {
          this.setState({
            ...this.state,
            tableClassName: 'half',
          })
        }
      })
    }, 2000)
  }


  render() {
    return <table className={this.state.tableClassName}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Icon</th>
      </tr>
      </thead>
      <tbody>
      {this.state.data.map((item, index) => <tr
        key={index}
        className={item.selected ? "selected" : null}
      >
        <td>{item.type}</td>
        <td>{item.icon}</td>
      </tr>)}
      </tbody>
    </table>
  }
}
