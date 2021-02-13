import './App.css';
import React, { Component } from 'react';
import AccountsContainer from './AccountsContainer';

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
  constructor(props) {
    super(props)

    this.state = {
      accounts: [],
      isLoading: true
    }
  }

  //to properly format the telephone number. I have to create a function that includes a regex, which then converts it to the right format
  // this is the link to my function from the repl that I created and was going to implement into my code
  // --> https://repl.it/@JDawgIsSteve/phoneFormat#index.js
  //then i would pass it down as a prop to my account containers then down to my account and interpolate it when rendering the information

  //to format the dates, my logic would be to split the string
  //then references the docs, i would use getDate, getMonth, getFullYear to combine a string with my final product


  componentDidMount = () => {
    fetch('https://frontiercodingtests.azurewebsites.net/api/accounts/getall')
      .then(res => res.json())
      .then(data => this.setState({accounts: data}))
      .catch(err => console.log(err))
  }

  render() {
    // { console.log('accounts', this.state.accounts)}
    //this is where I would put the loading logic while waiting for my data to fetch

    return (
      <div className="App">
        <header className="App-header">
          <h1>ACCOUNTS</h1>
        </header>
        <AccountsContainer accounts={this.state.accounts}/>
      </div>
    );
  }
}

export default App;
