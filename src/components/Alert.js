import React from 'react'

function Alert(props) {
    return (
        <>
            <div className={`alert alert-${props.color} mt-4`}>
                {props.msg}
            </div>
        </>
    )
}

export default Alert
