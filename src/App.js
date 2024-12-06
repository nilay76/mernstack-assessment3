import React from "react";
import Success from "./components/SuccessComponent";
import UserSignIn from "./components/UserSignIn";
import LifeCycleComponent from "./components/LifeCycleComponent";

export default class Application extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    }
  }
  render() {



    return(
    <>
      <h1>Assessment, Dec 04, 2024</h1>
      <hr></hr>
      <Success/>
      <hr></hr>
      <h1> Login component, uncontrolled</h1>
      <UserSignIn/>
      <hr></hr>
      <h1>Life Cycle of Component</h1>
      < LifeCycleComponent/>
    </>
    )
  }
}
