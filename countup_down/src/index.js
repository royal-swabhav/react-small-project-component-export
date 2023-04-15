import React from "react";
import ReactDOM from 'react-dom';
import { Buttons } from "./customButton";
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {count:0};
  }
CountDown = () =>{
  this.setState({
    count:this.state.count-1
  })
}
CountUp = () =>{
  this.setState({
    count:this.state.count+1
  })
}
   
  render(){
    return(
      <div>
        <h1>Wellcome to my app</h1>
        <p>I've been clicked {this.state.count}</p>
        <Buttons text="countdown"
        handleClick={this.CountDown}/>
        <Buttons text="countup"
        handleClick={this.CountUp}/>
      </div>
    );
  }
}
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );