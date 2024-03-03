
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux-getting-start/counterSlice'
import { useEffect } from 'react'
import { fetchUsers } from './redux-getting-start/fetchUserSlice'

function App() {

  const count = useSelector(state => state.counter.value)
  const clickTime = useSelector(state => state.clickTime)
  const dispatch = useDispatch()

  const users = useSelector(state => state.user.data);
  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  console.log(users)
  return (
    <>
     <p>Button Click - {clickTime.time}</p>
     <p>{count}</p>
     <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Decrement</button>
     </div>

     <hr />

     <div>
      <ul>
      {users.map(user => (
            <li key={user.id}>{user.name}</li>
      ))}
      </ul>
     </div>
    </>
  )
}

export default App
