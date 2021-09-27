import React from 'react';
import './Add.css'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listName: '',
      isAddFormEnable: props.isAddFormEnable
    }
    this.toggleAddForm = this.toggleAddForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onAddColumn = this.onAddColumn.bind(this)
  }

  toggleAddForm () {
    this.setState({ isAddFormEnable: !this.state.isAddFormEnable });
  }

  handleChange (event) {
    this.setState({listName: event.target.value});
  }
  
  onAddColumn () {
    this.props.addColumn(this.state.listName)
    this.setState({listName: ''});
    this.toggleAddForm()
  }

  render () {
    if (!this.state.isAddFormEnable) {
      var insertButton = (
        <button onClick={this.toggleAddForm}>
          add another list
        </button>
      )
    } else {
      var insertNameElements = (
        <React.Fragment>
          <input type="text" value={this.state.listName} onChange={this.handleChange} /> 
          <button onClick={this.onAddColumn}>
            add list
          </button>
          <button onClick={this.toggleAddForm}>
            close
          </button>
        </React.Fragment>
      )
    }
    return (
      <div
        className="add-card" 
      >
        { insertButton }
        { insertNameElements }
      </div>
    )
  }
}
export default Add
