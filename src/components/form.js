import React, { useState } from "react";

const SignupForm = ()=>{
const [task,setTask] = useState({title:"",personnel:0,start:"",end:""});

const handleChange = (event)=>{
    const {name,value} = event.target;
    setTask(prevState => ({...prevState, [name]: value}));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (response.ok) {
            setTask({ title: "", personnel: 0, start: "", end: "" });
        } else {
            console.error('Failed to submit task');
        }
    } catch (error) {
        console.error('Error submitting task', error);
    }
};

return(
    <div>
        <h1>Task details form</h1>
        <form>
            <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="title"/>
            <input type="number" name="personnel" value={task.personnel} onChange={handleChange} placeholder="personnel"/>
            <input type="date" name="start" value={task.start} onChange={handleChange}/>
            <input type="date" name="end" value={task.end} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}> submit</button>
        </form>
    </div>
);

}
export default SignupForm;