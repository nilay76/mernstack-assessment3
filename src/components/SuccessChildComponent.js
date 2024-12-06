import React, { useState } from "react";

export default function SuccessChild(props) {

    let message = useState("Message sent from child component")
    let sendDataBack = () => {
        props.callBackEvent(message)
    }

    return(
        <>
            <h3>This is success child</h3>
            <h3>It can display parent name: {props.name}</h3>
            <h3>and parent address: {props.address}</h3>

            <button onClick={()=>sendDataBack()}>Send data back to parent</button>
        </>
    )
}