import React from "react";
import "../reset.css";
import "./form.css";

let mailaddress = "";
let password = "";
function Login() {
    return (
        <div className="form-container">
            <div className="form-header">Login</div>
            <div className="form-item">
                <form>
                    Email <br />
                    <input
                        type="text"
                        size={25}
                        onChange={(e) => {
                            mailaddress = e.target.value;
                        }}
                    />{" "}
                    <br />
                    Password <br />
                    <input
                        type="Password"
                        size={25}
                        onChange={(e) => {
                            password = e.target.value;
                        }}
                    />
                </form>
                <button onClick={submitLogin}>Enter</button>
            </div>
            <div className="form-footer">
                <span className="extra">
                    No account yet? <a href="/signup">Make one!</a>
                </span>
            </div>
        </div>
    );
}

function submitLogin() {
    if(mailaddress === "") {
        alert("Missing Email Address");
        return;
    }
    if(password === "") {
        alert("Missing Password");
        return;
    }
    alert(mailaddress + " " + password);
}

export default Login;
