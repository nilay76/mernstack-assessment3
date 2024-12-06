import React, {Component} from "react";

export default class LifeCycleComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
            id: 1,
            submitCounter: 0,
            inputDisabled : false,
        }

        this.formSubmit = (evt) =>{
            let id = this.state.id + 1;
            let submitCounter = this.state.submitCounter+1;
            this.setState({
                    id, submitCounter
                }
            )

            evt.preventDefault();
        }

        // this.onclick = this.onclick.bind(this)
    }
    componentDidMount() {
        // this will trigger once when component is mounted onto the DOM.
        alert("Component is mounted")


    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log("Checking if component should update")

        // Question 10, this will check if next state is same as original state, and then stop the update
        //     if(nextState==this.state){
        //         console.log("current state same as next")
        //         return false
        //     }

        if(nextState.id==this.state.id && nextState.submitCounter==this.state.submitCounter && nextState.inputDisabled==this.state.inputDisabled){
            console.log("current state same as next state, so aborting update")
            return false;
        }


        // this will not allow updates to component when id value is greater than 3;
        console.log("Current id value: " + this.state.id + " current submitted value: " + this.state.submitted);
        console.log("Next id value: " + nextState.id + " next submitted value: " + nextState.submitted);
        if (nextState.submitCounter<=3 && this.state.inputDisabled==false) {
            console.log("component should update")
            return true
        } else {
            console.log("component shouldn't update")
            return false
        }

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { prevState, prevProps}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // after ever update of component, reset submitted value to false
        console.log("Checking if input should be disabled for the next turn")
        let inputDisabled=true;
        if (this.state.submitCounter>=3) {
            this.setState({
                inputDisabled
            })
        }
    }

    componentWillUnmount() {
        // if the component is going to be unmounted, this is where the codes to be executed on dismount will go
    }

    onclick = (evt)=>{
        console.log("state change button is clicked")
        let id= this.state.id;
        let submitCounter = this.state.submitCounter;
        let inputDisabled=this.state.inputDisabled;
        this.setState({
            id, submitCounter, inputDisabled
        })

        evt.preventDefault();
    }

    render() {
        return(
            <>
                <form id={"formId"} onSubmit={this.formSubmit}>
                    <input name={"id"} type={"text"} value={this.state.id} disabled={true} />
                    <input name={"name"} placeholder={"Enter Name"} id={"nameInput"} disabled={this.state.inputDisabled==true? true : false}/><br/>
                    <input name={"address"} placeholder={"Enter address"} id={"addressInput"} disabled={this.state.inputDisabled==true?true: false}/><br/>
                    <input name={"email"} placeholder={"Enter email"} id={"emailInput"} disabled={this.state.inputDisabled==true?true: false}/><br/>
                    <button type={"submit"} disabled={this.state.inputDisabled==true?true:false} >Submit</button>
                </form>
                <button onClick={this.onclick}>Set same state again</button>
            </>
        )
    }
}