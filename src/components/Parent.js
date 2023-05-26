import React, { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        counter=counter + 1;
        setCounter(counter)
    }
    const handleDecrement = () => {
        counter=counter - 1;
        setCounter(counter)
    }

    return (
        <>
            <h1>{counter}</h1>
            <Child addFunc={handleIncrement} delFunc={handleDecrement} />
        </>
    )
}

export default Parent