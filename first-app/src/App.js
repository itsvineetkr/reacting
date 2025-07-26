import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ChangeDetails from './components/ChangeDetails';


function App() {
    const [details, setDetails] = useState({
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer"
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home details = {details}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/change" element={<ChangeDetails setDetails={setDetails} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
