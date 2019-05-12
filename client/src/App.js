import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ViewAccess from "./ViewAccess";
import ViewInput from "./ViewInput"

class App extends React.Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;
    console.log(drizzle);

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      console.log("Drizzle State:\n");
      console.log(drizzleState);

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // if (this.state.loading) return "Loading Drizzle...";
    console.log("I am here.");
    return (
      <div>

      
          <ViewInput    drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState} />   
      
 
          <ViewAccess    drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}  />   
        

      </div>



    )
  }
}

export default App;
