import React from 'react';
import './AccountsContainer.css';
import ActiveContainer from './ActiveContainer';
import OverdueContainer from './OverdueContainer';
import InactiveContainer from './InactiveContainer';

// in this component, this is where I want to render my other account containers
// --> active
// --> overdue
// --> inactive

// I have to pass the information down to my components

//FOR NOW... all the containers have the same code, so it's not DRY, I wanted to display the information first,
// then implement the correct format for the information
// then conditionally render the accounts according to their status
//ie: In the inactive container, if amount due === 0 then I would render the account card, if it's not 0, then don't render it
//ie: In the active container, if amount due > 0, then I would render the account card, if not then don't render it
//ie: In the overdue container, if the due date is past the current due date, then display the account card, if not then don't render it
// then lastly I would implement CSS grid, and other styling to make it look more appealing
// I used different background colors because I wanted to know which component I was dealing with
// With the finished product I would just use one color, and change font colors and add other styling that was necessary


const AccountsContainer = ({accounts}) => {

    // console.log('acctContProps', accounts)
    return (
        <div className="accounts-container">
            <ActiveContainer accounts={accounts} />
            <OverdueContainer accounts={accounts} />
            <InactiveContainer accounts={accounts} />
        </div>
        
    )
}

export default AccountsContainer;