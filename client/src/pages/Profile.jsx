import React from "react";
import "./profile.css";
import Goal from '../Components/Items/Goal';
import Task from '../Components/Items/Task';

const profileName = "Joji";
const currentGoals = [
    {
        name: "Socialize More",
        daily: true,
        completed: false,
        note: "40 pushups, 50 sit ups",
    },
    {
        name: "Learn Japanese",
        daily: true,
        completed: false,
        note: "anki review",
    }
];

const currentTasks = [
    {
        name: "workout",
        daily: true,
        completed: false,
        note: "40 pushups, 50 sit ups",
    },
    {
        name: "study",
        daily: true,
        completed: false,
        note: "anki review",
    }
];

function Profile() {
    return (
        <div className="profile-page">
            <div className="profile-header-container">
                <span className="profile-header-item">{profileName}'s Goals</span>
            </div>
            {currentGoals.map((obj, id) => {
                return <Goal name={obj.name} note={obj.note}/>
            })}
            <div className="profile-header-container">
                <span className="profile-header-item">{profileName}'s Tasks</span>
            </div>
            {currentTasks.map((obj, id) => {
                return <Task name={obj.name} note={obj.note}/>
            })}
        </div>
    );
}

export default Profile;
