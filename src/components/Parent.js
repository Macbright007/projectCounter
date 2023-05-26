import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <Child addFunc={handleIncrement} delFunc={handleDecrement} />
        </>
    )
}

export default Parent