import React from 'react';
import './AccountsContainer.css';
import ActiveContainer from './ActiveContainer';
import OverdueContainer from './OverdueContainer';
import InactiveContainer from './InactiveContainer';

// in this component, this is where I want to render my other account containers
// --> active
// --> overdue
// --> inactive

const AccountsContainer = () => {
    return (
        <div className="accounts-container">
            <ActiveContainer />
            <OverdueContainer />
            <InactiveContainer />
        </div>
        
    )
}

export default AccountsContainer;