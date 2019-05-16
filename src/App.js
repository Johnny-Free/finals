import React, { Component } from 'react';
import Search from './Search'
import Result from './Result'
import NavBar from './NavBar'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      active : true, //used below in the return to determin which component to rener
    }
    this.handleClick = this.handleClick.bind(this); //passed to the search component for the button
    this.handleClick2 = this.handleClick2.bind(this); //passed to the nav bar to be able to navigate to the home page.
  }

  // this event handler will toggle the active state from true to false an from false to true depending on current state of active.
  // this is used mainly to get to the result page from the home page.
  handleClick(){
    this.setState({
      active: !this.state.active,
    });
  }
  //this event handler will toggle the active state to true regardless of the current state of active. Used in the nav bar to return 
  // to the home page
  handleClick2(){
    this.setState({
      active: true
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar handleClick2={this.handleClick2}/>
        {this.state.active && <Search handleClick={this.handleClick}/>} {/* if the state of active is true then search will render */}
        {!this.state.active && <Result />} {/* if the state of active is false the search will render*/}
      </div>
    );
  }
}

export default App;