import React, { useState } from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as Uivalidate from '../common/form/UiValidation'

function CheckOutPage() {

    const [item] = useState(JSON.parse(localStorage.getItem('item')))
    const [cardNumber,setCard] = useState('')
    const history = useHistory();

    function setValue(e){
        var val = e.target.value;
        var newVal = '';
        val = val.replace(/-/g, '');
        for(var i = 0; i < val.length; i++) {
            if(i%4 === 0 && i > 0) 
                newVal = newVal.concat('-');
            newVal = newVal.concat(val[i]);
        }
        setCard(newVal);
    }

    function order(e) {
        e.preventDefault()
        let form = $(".data")
        let valid=Uivalidate.formValidation(form);
        if(!valid.status){
            alert(valid.msg);
            return
        }
        
        history.push('/otpauth');
    }

    return (
        <div className="row reverse rowMargin">
            <div className="col-75">
                <div className="container">
                    <form className="data">

                        <div className="row reverse">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name*</label>
                                <input type="text" id="fname" className="check" name="firstname" placeholder="Aman Singh" />
                                <label htmlFor="email"><i className="fa fa-envelope"></i> Email*</label>
                                <input type="text" id="email" className="check" name="email" placeholder="aman@example.com" />
                                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address*</label>
                                <input type="text" id="adr" className="check" name="address" placeholder="202 Sector 38" />
                                <label htmlFor="city"><i className="fa fa-institution"></i> City*</label>
                                <input type="text" id="city" className="check" name="city" placeholder="Varanasi" />

                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">State*</label>
                                        <input type="text" className="check" id="state" name="state" placeholder="UP" />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="zip">Zip*</label>
                                        <input type="text" className="check" id="zip" name="zip" placeholder="223105" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-50">
                                <h3>Payment</h3>
                                <label htmlFor="fname">Accepted Cards</label>
                                <div className="icon-container">
                                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                    <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                    <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                </div>
                                <label htmlFor="cname">Name on Card*</label>
                                <input type="text" className="check" id="cname" name="cardname" placeholder="Aman Singh" />
                                <label htmlFor="ccnum">Card number*</label>
                                <input type="text" className="check" id="ccnum" value={cardNumber} onChange={(e)=>setValue(e)} name="cardnumber" placeholder="1111-2222-3333-4444" />
                                <label htmlFor="expmonth">Exp Month*</label>
                                <input type="text" className="check" id="expmonth" name="expmonth" placeholder="September" />
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="expyear">Exp Year*</label>
                                        <input type="text" className="check" id="expyear" name="expyear" placeholder="2018" />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="cvv">CVV*</label>
                                        <input type="text" className="check" id="cvv" name="cvv" placeholder="352" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button type="button" onClick={(e) => order(e)} className="btn">Continue to checkout</button>
                    </form>
                </div>
            </div>
            <div className="col-25">
                <div className="container">
                    <h4>Cart <span className="price priceclassName"><i className="fa fa-shopping-cart"></i> <b>1</b></span></h4>
                    <p><Link to='/'>{item.name}</Link> <span className="price">${item.price}</span></p>
                    <hr></hr>
                    <p>Total <span className="price priceclassName"><b>${item.price}</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
