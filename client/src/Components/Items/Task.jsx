import React from "react";
import "./Goal.css";

function Goal(props) {
    return (
        <div className="goal">
            <div className="goal-item">
                <span className="header">Task: {props.name}</span>
                <span className="note">Note: {props.note}</span>
            </div>
            <div className="goal-button">
                <button>Complete</button>
            </div>
        </div>
    );
}

export default Goal;
