import React from 'react';
import Task from './Task.js'
import './List.css';

class List extends React.Component {
  constructor (props) {
    super(props)
    const list = localStorage.getItem('listColumn')
    const jsonList = list ? JSON.parse(list) : []
    this.state = {
      columns: jsonList
    }
  }

  onAddTask (columnName) {
    const column = this.state.columns.find((item) => item.columnName === columnName)
    const taskList = column.tasks ?? []
    taskList.push({id: 1, name: ''})
    column.tasks = taskList
    this.setState({columns: this.state.columns})
    localStorage.setItem('listColumn', JSON.stringify(this.state.columns))
  }

  render () {
    return (
      <div className="columns">
      {this.state.columns.map(function(column){
            return <div className="column" key={column.columnName}>
            <span>{column.columnName}</span>
            <button onClick={() => this.onAddTask(column.columnName)}>
              add task 
            </button>
            {column.tasks && column.tasks.map(function(task){     
              return <Task key={task.id} item={task} /> 
            })}
          </div>
          })}
      </div>
    )
  }
}
export default List
