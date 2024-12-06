import React, {Component} from "react";
import SuccessChild from "./SuccessChildComponent";
import SuccessStory from "./SuccessStory";

export default class Success extends Component{

    constructor(props) {
        super(props);

        this.state ={
            name: "Alice",
            address: "Wonderland",
            message: "Success Component successfully rendered"
        }

        this.successStory = new SuccessStory();
    }

    receiveChildMessage = (msg) =>{
        this.setState({
                message: msg
            }
        )
    }


    render() {
        return(
            <>
                <h2>Class Component Success rendered</h2>
                <h2>Success Message: {this.state.message}</h2>
                <SuccessChild name={this.state.name} address={this.state.address} callBackEvent={this.receiveChildMessage}/>
                <hr></hr>
                <h2>It can also pass another component props to the child</h2>
                <SuccessChild name={this.successStory.state.name} address={this.successStory.state.address}/>
            </>
        )
    }
}

