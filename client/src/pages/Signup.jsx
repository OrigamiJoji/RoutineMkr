import React from "react";
import "../reset.css";
import "./form.css";

let mailaddress = "";
let password = "";
let password2 = "";
function Signup() {
    return (
        <div className="form-container">
            <div className="form-header">Signup</div>
            <div className="form-item">
                <form>
                    Email <br />
                    <input
                        type="text"
                        name="email"
                        size={25}
                        onChange={(e) => {
                            mailaddress = e.target.value;
                        }}
                    />{" "}
                    <br />
                    Password <br />
                    <input
                        type="Password"
                        name="password"
                        size={25}
                        onChange={(e) => {
                            password = e.target.value;
                        }}
                    />
                    <br />
                    Confirm Password <br />
                    <input
                        type="Password"
                        name="password"
                        size={25}
                        onChange={(e) => {
                            password2 = e.target.value;
                        }}
                    />
                </form>
                <button onClick={submitSignup}>Enter</button>
            </div>
            <div className="form-footer">
                <span className="extra">
                    Have an account? <a href="/login">Log in!</a>
                </span>
            </div>
        </div>
    );
}

function submitSignup() {
    if (mailaddress === "") {
        alert("Missing Email Address");
        return;
    }
    if (password === "") {
        alert("Missing password");
        return;
    }
    if (password !== password2) {
        alert("Passwords do not match");
        return;
    }
    alert(mailaddress + " " + password);
}

export default Signup;
