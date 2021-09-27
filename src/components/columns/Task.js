import React from 'react';

class Task extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskItem: props.item
    }
    this.handleChange = this.handleChange.bind(this)
    this.onAddColumn = this.onAddColumn.bind(this)
  }

  handleChange (event) {
    this.setState({id: this.state.taskItem.id, name: event.target.value});
  }
  
  onGoToNextColumn () {
    this.props.addColumn(this.state.listName)
    this.setState({listName: ''});
    this.toggleAddForm()
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.taskItem.name} onChange={this.handleChange} /> 
        <button onClick={this.onGoToNextColumn}>
          go to next column
        </button>
      </div>
    )
  }
}
export default Task 
