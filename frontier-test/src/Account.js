import React from 'react';
import './Account.css';

//destructure all the props that are needed

const Account = ({id, firstName, lastName, email, phoneNumber, amountDue, paymentDueDate}) => {
    {console.log(firstName)}
    return(
        <div className="account">
            <h4>Name: {`${lastName}, ${firstName}`} </h4>
            <h4>Email: {email}</h4>
            <h4>Phone Number: {phoneNumber}</h4>
            <h4>Amount Due: $ {amountDue}</h4>
            {/* <h4>{paymentDueDate === '' ? '' : `Due Date: ${paymentDueDate}`}</h4> */}
            {/* I was trying to figure out how to do some conditional logic to hide the due date field if it was empty */}
            <h4>Due Date: {paymentDueDate}</h4>
        </div>
    )
}

export default Account;