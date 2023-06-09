import React, { useState } from 'react';
import './LoginPage.css';
import RadioButtonComponent from './RadioButtonComponent';
import ConnectComponent from './ConnectComponent';
import CheckboxComponent from './CheckboxComponent';
import TopicSelectionComponent from './TopicSelectionComponent';
import MentorTypeComponent from './MentorTypeComponent';
import ProfileComponent from './ProfileComponent';
import CareerOptionsComponent from './CareerOptionsComponent';
import MentoringCall from './MentoringCall';
import ReviewComponent from './ReviewComponent';

const LoginPage = () => {
    const [login1Data, setLogin1Data] = useState({
        username: '',
        password: '',
    });

    const [login2Data, setLogin2Data] = useState({
        username: '',
        password: '',
    });

    const [activeLogin, setActiveLogin] = useState(null);

    const handleLoginClick = (loginNumber) => {
        setActiveLogin(loginNumber);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (activeLogin === 1) {
            console.log('Login 1 data:', login1Data);
            setLogin1Data({ username: '', password: '' });
        } else if (activeLogin === 2) {
            console.log('Login 2 data:', login2Data);
            setLogin2Data({ username: '', password: '' });
        }
        setActiveLogin(null);
    };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        if (activeLogin === 1) {
            setLogin1Data((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else if (activeLogin === 2) {
            setLogin2Data((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    return (
        <div className="container">
            <div className="outer-box">
                <div className="login-box"></div>
                <div className="login-page">
                    <div className="login-box">
                        <h2>Welcome to CoCo Mentors</h2>
                        <div className="login-buttons">
                            <button className={`login-button ${activeLogin === 1 ? 'active' : ''}`} onClick={() => handleLoginClick(1)}>Do You Want To Mentor?</button>
                            <button className={`login-button ${activeLogin === 2 ? 'active' : ''}`} onClick={() => handleLoginClick(2)}>Do You Want To Get Mentored?</button>
                        </div>
                        {activeLogin && (
                            <form onSubmit={handleLoginSubmit}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={activeLogin === 1 ? login1Data.username : login2Data.username}
                                    onChange={handleLoginChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={activeLogin === 1 ? login1Data.password : login2Data.password}
                                    onChange={handleLoginChange}
                                />
                                <button type="submit">Submit</button>
                            </form>
                        )}
                        {activeLogin && (
                            <div>
                                <p>Register for new user</p>
                                {/* Add your registration form or link here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="second-login-box">
                <div className="login-fields">
                    <button
                        className="login-field"
                        onClick={() => console.log('Clicked on Login Field 1')}
                    >
                        Login as a Mentor
                    </button>
                    <button
                        className="login-field"
                        onClick={() => console.log('Clicked on Login Field 2')}
                    >
                        Login with Gmail
                    </button>
                </div>
            </div>
            <div className="radio-button-box">
                <RadioButtonComponent />
            </div>
            <div>
                <ConnectComponent />
            </div>
            <div>
                <CheckboxComponent />
            </div>
            <div>
                <TopicSelectionComponent />
            </div>
            <div>
                <MentorTypeComponent />
            </div>
        <div>
            <ProfileComponent/>
        </div>
        <div>
            <CareerOptionsComponent/>
        </div>
        <div>
            <MentoringCall/>
        </div>
        <div>
            <ReviewComponent/>
        </div>
        </div>
    );
};

export default LoginPage;
