import React from 'react'

const Alert_offers = (props) => {
    return (
        <>
            <div className="alert alert-warning" role="alert">
            <span className="badge text-bg-warning">Offer</span> {props.msg} <a href="">know more</a>
            </div>
        </>
    )
}

export default Alert_offers
