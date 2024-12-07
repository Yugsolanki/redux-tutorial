import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1>Reduce Tutorial</h1>
      <div className="card">
        <Counter />
        <Todo />
      </div>
    </>
  )
}

export default App
