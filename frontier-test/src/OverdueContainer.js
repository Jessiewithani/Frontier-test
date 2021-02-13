import React from 'react';
import './OverdueContainer.css';
import Account from './Account';

const OverdueContainer = ({accounts}) => {

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
    //     <div className="overdue-container">
    //         {/* <h3>Overdue</h3> */}
    //         {accountCard}
    //     </div>
    // )
    return(
        <div className="overdue-container">
            {/* change overdue font to red */}
            <h3>Overdue</h3>
        </div>
    )
}

export default OverdueContainer;