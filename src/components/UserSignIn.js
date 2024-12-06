import React from "react";

export default class UserSignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "Default username",
            password: "Default password"
        }

        this.refUsername=React.createRef();
        this.refPassword=React.createRef();
    }

    formSubmit = (evt)=>{
        let username = this.refUsername.current.value;
        let password = this.refPassword.current.value;

        this.setState({
            username, password
        })

        evt.preventDefault();
    }

    render() {
        return(
            <>
                <form method="post" action="/login" onSubmit={this.formSubmit}>
                    <label htmlFor={"username"}>Username</label>
                    <input type="text" name="username" placeholder="Enter Username" ref={this.refUsername}></input>
                    <label htmlFor={"password"}>Password</label>
                    <input type="password" name="password" placeholder="Enter password" ref={this.refPassword}></input>

                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
}