import React from "react";
import { useState } from "react";
import "./Profile.css";
function Profile(){
    let [theme,setTheme]=useState({
        bgColor:"white",
        textColor:"black",
    });
    let [name,setName]=useState("Rohan");
    let [image,setImage]=useState("https://pbs.twimg.com/profile_images/1086087925262098433/ffZgXIqD_400x400.jpg");
    let [email,setEmail]=useState("rohan@gmail.com");
    let x="Rohan is a passionate software engineer with an insatiable curiosity for technology. His journey began with a fascination for algorithms and a love for elegant code. Over the years, he has honed his skills, transforming abstract ideas into functional software solutions. Let’s delve into the world of Rohan, where creativity meets logic.";
    let [description,setDescription]=useState(x);

    const changeTheme = (event) =>{
        if(event.target.checked){
            setTheme({
                bgColor:"black",
                textColor:"white",
            });
        }
        else{
            setTheme({
                bgColor:"white",
                textColor:"black",
            });
        }
        
    }

    const changeToSonal = () =>{
        setName("Sonal");
        setImage("https://jobs.comcast.com/media/img/original/2019/10/jobs_MachineQ_woman_resize.jpg");
        setEmail("sonal@gmail.com");
        let m="Sonal is a dynamic HR professional who thrives on connecting with people. Her mission To create a harmonious workplace where employees flourish. With a blend of empathy, strategy, and organizational finesse, she ensures that the human side of business remains vibrant.";
        setDescription(m);
    }

    const changeToRohan = () =>{
        setName("Rohan");
        setImage("https://pbs.twimg.com/profile_images/1086087925262098433/ffZgXIqD_400x400.jpg");
        setEmail("rohan@gmail.com");
        let y="Rohan is a passionate software engineer with an insatiable curiosity for technology. His journey began with a fascination for algorithms and a love for elegant code. Over the years, he has honed his skills, transforming abstract ideas into functional software solutions. Let’s delve into the world of Rohan, where creativity meets logic.";
        setDescription(y);
    }

    return (
        <div className="ProfileContainer">
            <div className="imageCol">
                <img width={"100%"} height={"100%"} src={image} alt="Profile Pic" />
            </div>
            <div className="contentCol" style={{backgroundColor:theme.bgColor,color:theme.textColor }}>
                <dl>
                    <dt>User Name: </dt>
                    <dd>{name}</dd>
                    <dt>Email ID: </dt>
                    <dd>{email}</dd>
                    <dt>Description: </dt>
                    <dd>{description}</dd>
                    <button className="btn btn-outline-success mx-2 my-2" onClick={changeToRohan}>Rohan</button>
                    <button className="btn btn-outline-primary" onClick={changeToSonal}>Sonal</button><br/>
                    <input type="checkbox" className="mt-10 check "
                    onChange={changeTheme} /> Check to switch to dark mode
                </dl>
            </div>
        </div>
    );
}

export default Profile;