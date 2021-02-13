import React from 'react';
import './ActiveContainer.css';
import Account from './Account';

// I would have to loop through my accounts information to display the acct in my container
//create a variable that iterates through the data to display information

const ActiveContainer = ({accounts}) => {

    // {console.log('active', accounts)}
    // because of time constraint I couldn't finish. This is what I would do 
    // I would make a conditional based off of the due dates
    // or the amount due and render the accounts in their correct columns
    
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
            {/* <h3>active</h3> */}
            {accountCard}
        </div>
    )
}

export default ActiveContainer;