import React from "react";

import Button from "components/Button";

export default function AuthPage(props) {

    if (props.type === "login") {
        return (
            <div className="s-auth-page" id="login">
                <div className="left">
                    <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                </div>
                <div className="right">
                    <div className="c-auth-container">
                        <p className="c-auth-container-title">Login</p>
                        <div className="input-group">
                            <label for="name">Email</label>
                            <input type="text"></input>
                        </div>
                        <div className="input-group">
                            <label for="name">Password</label>
                            <input type="text"></input>
                        </div>
                        <div className="spacer"></div>
                        <Button isSecondary value="Login" width="234"></Button>
                        <p className="secondary">New here?</p>
                        <Button type="link" link="/register" isWhite value="Register" width="234"></Button>
                    </div>
                </div>
            </div>
        );
    } else if (props.type === "register") {
        return (
            <div className="s-auth-page" id="register">
                <div className="left">
                    <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                </div>
                <div className="right">
                    <div className="c-auth-container">
                        <p className="c-auth-container-title">Register</p>
                        <div className="input-group">
                            <label for="name">Full Name</label>
                            <input type="text"></input>
                        </div>
                        <div className="input-group">
                            <label for="name">Email</label>
                            <input type="text"></input>
                        </div>
                        <div className="input-group">
                            <label for="name">Password</label>
                            <input type="text"></input>
                        </div>
                        <div className="input-group">
                            <label for="name">Confirm Password</label>
                            <input type="text"></input>
                        </div>
                        <div className="spacer"></div>
                        <Button isSecondary value="Register" width="234"></Button>
                        <p className="secondary">Have an account?</p>
                        <Button type="link" link="/login" isWhite value="Login" width="234"></Button>
                    </div>
                </div>
            </div>
        )
    }

}
