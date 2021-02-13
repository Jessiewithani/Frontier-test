import React from 'react';
import './InactiveContainer.css';
import Account from './Account';

const InactiveContainer = ({accounts}) => {

    // because of time constraint I couldn't finish. This is what I would do 
    // I would make a conditional based off of the due dates
    // or the amount due and render the accounts in their correct columns

    // const accountCard = accounts.map(account => {
    //     return <Account 
    //     key={account.Id} 
    //     accountStatus={account.AccountStatus}
    //     amountDue={account.AmountDue}
    //     email={account.Email}
    //     firstName={account.FirstName}
    //     id={account.Id} 
    //     lastName={account.LastName}
    //     paymentDueDate={account.PaymentDueDate}
    //     phoneNumber={account.PhoneNumber}

    //     />
    // })
    // return(
    //     <div className="inactive-container">
    //         {/* <h3>inactive</h3> */}
    //         {accountCard}
    //     </div>
    // )

    return(
        <div className="inactive-container">
            {/* change inactive font to a disabled color like grey */}
            <h3>inactive</h3>
        </div>
    )
}

export default InactiveContainer;