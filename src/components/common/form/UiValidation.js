import $ from "jquery";

export function formValidation(form) {
    var flag = {
        status: true,
        msg: ""
    };
    form.find(".check:visible").each(function() {
        var $input = $(this);
        var regex;
        var filedName = $input[0].name;
        var fieldValue = $input[0].value;
        switch (filedName) {
            case "email":
                regex = /^(([^<>()[\]\\.,;!@`~#$%^+&/*():?'|{}\s@"]+(\.[^<>()[\]\\.,;!@`~#$%^&/+*():?'|{}\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var emailValid = regex.test(fieldValue);
                if (fieldValue.trim().length === 0) {
                    flag.status = false;
                    flag.msg = "Email field cannot be left blank";
                } else if (!emailValid) {
                    flag.status = false;
                    flag.msg = "Invalid Email";
                }
                break;
            case "phone":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Phone field cannot be left blank";
                }
                break;
            case "firstname": 
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Name cannot be left blank";
                }
                break;
            case "address":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Address cannot be left blank";
                }
                break;
            case "city":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "City cannot be left blank";
                }
                break;
            case "State": 
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "State cannot be left blank";
                }
                break;
            case "zip": 
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Zip cannot be left blank";
                }
                break;
            case "cardname":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Card holder name cannot be left blank";
                }
                break;
            case "cardnumber":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Card number cannot be left blank";
                }
                break;
            case "expmonth":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Expiry month cannot be left blank";
                }
                break;
            case "expyear":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "Expiry year cannot be left blank";
                }
                break;
            case "cvv":
                if (fieldValue.trim() === "") {
                    flag.status = false;
                    flag.msg = "CVV cannot be left blank";
                }
                break;
            default:
                break;
        }
        if (!flag.status) {
            return false;
          }
    })
    return flag;
}