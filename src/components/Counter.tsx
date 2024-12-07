import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, decrementByAmount, increment, incrementByAmount, incrementAsync } from '../state/counter/counterSlice';

const Counter = () => {

  const count: number = useSelector((state : RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(incrementAsync(5))}>+5 Async</button>
      </div>
    </div>
  )
}

export default Counter