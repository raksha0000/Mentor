import React from 'react';
import './LoginPage.css';


const ReviewComponent = () => {
    return (
      <div className="career-options-wrapper">
        <div className="career-options-box">
          <div className="centered-text">
            <p>Review your details and Publish?</p>
          </div>
          <div className="details-container">
            <div className="button-container">
            </div>
        </div>
        <div className="edit-paragraph-container">
          <p>Profile</p>
          <button className="edit-button">Edit</button>
        </div>
        <div className="edit-paragraph-container">
          <p>Area of expertise</p>
          <button className="edit-button">Edit</button>
        </div>
        <div className="edit-paragraph-container">
          <p>Type of Mentoring and rate</p>
          <button className="edit-button">Edit</button>
        </div>
        <div className="edit-paragraph-container">
          <p>Availability</p>
          <button className="edit-button">Edit</button>
        </div>
        <div className="save-continue-container">
          <button className="save-continue-button">Publish</button>
        </div>
        <div className="button-container">
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
