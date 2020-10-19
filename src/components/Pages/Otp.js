import React, { useState } from 'react'
import '../../assets/css/otpModal.css'
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


function Otp() {
    const [item] = useState(JSON.parse(localStorage.getItem('item')))
    const [defaultOtp] = useState('123456')
    const [newOtp, setNewOtp] = useState('')
    const history = useHistory();

    function verify() {
        if (defaultOtp === newOtp) {
            history.push('/sucessfull');
        } else {
            history.push('/failed');
        }

    }


    return (
        <div id="wrapper">
            <div id="dialog">
                <h3>Please enter the 6-digit verification code we sent via SMS:</h3>
                <p className="alignLeft">Total Price<span className="price priceclassName"><b>${item.price}</b></span></p>
                <input onChange={(e)=>setNewOtp(e.target.value)} value={newOtp} className="otp" type="text" minLength="6" maxLength="6" />
                <button onClick={()=>verify()} className="btn btn-primary btn-embossed">Verify</button>
                <div>
                    Didn't receive the code?<br />
                    <p className="mb-0 link">Send code again</p>
                    <Link to="/checkout">Change details</Link>
                </div>
            </div>
        </div>
    )
}

export default Otp
