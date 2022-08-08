import { useReducer } from "react";

type Props = {
  initialValue: number
}

enum Action {
  DECREMENT,
  INCREMENT,
  DOUBLE, 
  RESET
}

const reducer = (currentCount: number, action: Action) => {
  switch(action) {
    case Action.INCREMENT:
      return currentCount + 1
    case Action.DECREMENT:
      return currentCount - 1
    case Action.DOUBLE:
      return currentCount * 2
    case Action.RESET:
      return 0
    default:
      return currentCount
  }
}

const ReducerCounter = (props: Props) => {
  const { initialValue } = props

  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(Action.DECREMENT)}>-</button>
      <button onClick={() => dispatch(Action.INCREMENT)}>+</button>
      <button onClick={() => dispatch(Action.DOUBLE)}>x2</button>
      <button onClick={() => dispatch(Action.RESET)}>Reset</button>
    </div>
  )
}

export default ReducerCounter