import React, {useState} from 'react'

const MyCounter=(props)=> {
    
    const [countState, setCountState] = useState(77)

    function incCount() {
        // countState++
        setCountState(countState + props.incBy)
    }

    return (
        <div>

            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>

        </div>
    )
}

export default MyCounter;