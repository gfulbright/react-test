import React, {useEffect, useState} from 'react'

const MyCounter=(props)=> {
    
    const [countState, setCountState] = useState(77)

    useEffect(()=>{
        if (countState >= 100){
            alert("Resetting the count back to 77")
            setCountState(77)
        }
    }, [countState])

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