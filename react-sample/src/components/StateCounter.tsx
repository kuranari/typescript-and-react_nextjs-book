import { useState } from "react";

type Props = {
  initialValue: number
}

const StateCounter = (props: Props) => {
  const { initialValue } = props

  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default StateCounter