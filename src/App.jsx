import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Navbar from './assets/Components/Navbar'
import { decrement, increment } from './Redux/Counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.state)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar count = {count} />
      <div>
       <button onClick={() => dispatch(decrement())} >-</button>
       Currently state is {count}
       <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
