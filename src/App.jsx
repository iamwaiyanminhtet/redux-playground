
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux-getting-start/counterSlice'

function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <p>{count}</p>
     <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Decrement</button>
     </div>
    </>
  )
}

export default App
