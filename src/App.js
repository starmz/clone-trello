import Add from './components/columns/Add.js'
import List from './components/columns/List.js'
import './App.css';

function App() {
  function addColumn (columnName) {
    const list = localStorage.getItem('listColumn')
    const jsonList = list ? JSON.parse(list) : []
    jsonList.push({ columnName: columnName })
    localStorage.setItem('listColumn', JSON.stringify(jsonList))
  }
  return (
    <div className="App">
      <header className="App-header">
        <Add isAddFormEnable={false} addColumn={addColumn}/>
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
