import React from 'react';
import './ActiveContainer.css';
import Account from './Account';

// I would have to loop through my accounts information to display the acct in my container
//create a variable that iterates through the data to display information


const ActiveContainer = ({accounts}) => {

    // {console.log('active', accounts)}
    const accountCard = accounts.map(account => {
        return <Account 
        key={account.Id} 
        accountStatus={account.AccountStatus}
        amountDue={account.AmountDue}
        email={account.Email}
        firstName={account.FirstName}
        id={account.Id} 
        lastName={account.LastName}
        paymentDueDate={account.PaymentDueDate}
        phoneNumber={account.PhoneNumber}

        />
    })
    return(
        <div className="active-container">
            {/* <h2>active container</h2> */}
            {accountCard}
        </div>
    )
}

export default ActiveContainer;