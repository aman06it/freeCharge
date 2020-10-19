import React from 'react'
import { Link } from "react-router-dom";

function Sucessfull() {
    return (
        <div className="text-center successDiv">
            <div className="alert alert-success">
                <strong>Payment Successful!</strong> Your order is placed.
            </div>
            <div className="success-checkmark">
                <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                </div>
            </div>
            <div className="alert alert-success">
                <Link to='/' className="link m-0">Continue Shopping.</Link>
            </div>
        </div>
    )
}

export default Sucessfull
