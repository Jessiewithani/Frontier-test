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