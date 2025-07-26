import React from 'react'
import { Link } from 'react-router-dom';


const Home = ({details}) => {

    return (
        <div>
            <h1>This is Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus qui aliquid ex voluptatum ad temporibus. Impedit eaque facilis sunt incidunt repellat corrupti! Ea velit illum, omnis eligendi debitis voluptatem repudiandae? Fugit accusantium ratione nemo eos perspiciatis voluptates ea minus aliquam sunt in excepturi ducimus accusamus velit illum, magni cumque? Error, quaerat hii there?</p>
            
            <h2>Details</h2>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
            <p>Occupation: {details.occupation}</p>
            
            <h3>Navigation</h3>
            <p>Click the buttons below to navigate:</p>

            
            <button>
                <Link to="/change">To change details</Link>
            </button>
            <button>
                <Link to="/about">Go to About</Link>
            </button>
            <button>
                <Link to="/contact">Go to Contact</Link>
            </button>
            <button>
                <Link to="/">Go to Home</Link>
            </button>
        </div>
    )
}

export default Home
