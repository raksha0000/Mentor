import React, { useState } from 'react';
import './LoginPage.css';
import RadioButtonComponent from './RadioButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [activeLogin, setActiveLogin] = useState(null);
  const [mentorLogin, setMentorLogin] = useState(false);
  const [gmailLogin, setGmailLogin] = useState(false);
  const [showRadioButton, setShowRadioButton] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  const handleLoginClick = () => {
    setPreviousPage(activeLogin);
    setActiveLogin(2);
  };

  const handleMentorLoginClick = () => {
    setPreviousPage(activeLogin);
    setMentorLogin(true);
    setGmailLogin(false);
  };

  const handleGmailLoginClick = () => {
    setPreviousPage(activeLogin);
    setGmailLogin(true);
    setMentorLogin(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted');
    setPreviousPage(activeLogin);
    setActiveLogin(null);
    setMentorLogin(false);
    setGmailLogin(false);
    setShowRadioButton(true);
  };

  const handleGoBack = () => {
    if (gmailLogin) {
      setGmailLogin(false);
      setMentorLogin(true);
    } else if (mentorLogin) {
      setMentorLogin(false);
      setActiveLogin(previousPage);
    } else if (showRadioButton) {
      setShowRadioButton(false);
    }
  };

  return (
    <div className="container">
      {activeLogin === null && !showRadioButton && (
        <div className="outer-box">
          <div className="login-box">
            <h2>Welcome to CoCo Mentors</h2>
            <div className="login-buttons">
              <button className="login-button" onClick={handleLoginClick}>
                Do You Want To Mentor?
              </button>
              <button className="login-button">Do You Want To Get Mentored?</button>
            </div>
          </div>
        </div>
      )}

      {activeLogin === 2 && !showRadioButton && (
        <div className="second-login-box">
          <div className="login-fields">
            {!mentorLogin && !gmailLogin && (
              <>
                <button className="login-field" onClick={handleMentorLoginClick}>
                  Login as a Mentor
                </button>
                <button className="login-field" onClick={handleGmailLoginClick}>
                  Login with Gmail
                </button>
              </>
            )}

            {mentorLogin && (
              <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="Mentor ID" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Submit</button>
              </form>
            )}

            {gmailLogin && (
              <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="Enter Gmail ID" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}

      {showRadioButton && (
        <div className="radio-button-box">
          <RadioButtonComponent />
        </div>
      )}

      {(activeLogin !== null || showRadioButton) && (
        <div className="arrow-mark" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
