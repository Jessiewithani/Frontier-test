import './App.css';
import React, { Component } from 'react';

//START TIME: 6:30pm after wireframe

// ONE: 

// first I created a react app
// then I took some time to do a wireframe of the overall application
// there are 7 components all together
// 1. app
// 2. header
// 3. accounts container
// 4. active accounts container
// 5. overdue accounts container
// 6. inactive accounts container
// 7. individual accounts

// TWO: 

// next thing i'm going to have to do is be able to get access to the given endpoint
// I'm going to turn my App component into a class component, so I can have my state

class App extends Component {
  constructor() {
    super()

    this.state = {
      accounts: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetch('https://frontiercodingtests.azurewebsites.net/api/accounts/getall')
      .then(res => res.json())
      .then(data => this.setState({accounts: data}))
      .catch(err => console.log(err))
  }

  render() {
    { console.log('accounts', this.state.accounts)}

    return (
      <div className="App">
        <header className="App-header">
          <h1>ACCOUNTS</h1>
        </header>
      </div>
    );
  }
}

export default App;
