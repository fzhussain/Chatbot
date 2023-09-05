import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomePageImage } from '../images/background_img.svg';
import Flip from 'react-reveal/Flip';


const HomePage = () => {
    return (
        <div className="homepage-container">
            <HomePageImage />
            <div>
                <Flip left>
                    <h1>Enter into Student Info System</h1>
                </ Flip>

                <Link to="/enroll">
                    <button className="option-item">Enroll Now!</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
