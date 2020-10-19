import React from 'react'
import { Link } from "react-router-dom";

function Failed() {
    return (
        <div className="text-center successDiv">
        <div className="alert alert-danger">
            <strong>Payment Failed!</strong>
        </div>
        <div className="failed-crossmark">
            <div className="cross-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
        </div>
        <div className="alert alert-danger">
                <Link to='/checkout' className="link m-0">Try Again.</Link>
        </div>
    </div>
    )
}

export default Failed
