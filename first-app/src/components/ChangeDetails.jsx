import React from 'react'
import { Link } from 'react-router-dom';


const ChangeDetails = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.setDetails({
            name: event.target.name.value,
            age: event.target.age.value,
            occupation: event.target.occupation.value
        });

        event.target.reset();
        console.log("Details updated");
    }

    return (
        <div>
            <h2>Change Details</h2>
            <p>Here you can change the details of the user.</p>
            <p>For example, you can change the name, age, or occupation.</p>
            <p>Use the form below to update the details.</p>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter name" />
                <br />
                <label>Age:</label>
                <input type="number" name="age" placeholder="Enter age" />
                <br />
                <label>Occupation:</label>
                <input type="text" name="occupation" placeholder="Enter occupation" />
                <br />
                <button type="submit">Update Details</button>
            </form>
            <button>
                <Link to="/">Go back to see changes?</Link>
            </button>
        </div>
    )
}

export default ChangeDetails
