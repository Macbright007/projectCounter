import React from "react"

const Child = ({addFunc, delFunc}) => {

    return (
        <>
            <button onClick={addFunc}>+</button>
            <button onClick={delFunc}>-</button>
        </>
    )
}

export default Child