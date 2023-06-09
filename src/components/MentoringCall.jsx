import React from 'react';
import './LoginPage.css';

const MentoringCall = () => {
  return (
    <div className="career-options-wrapper">
      <div className="career-options-box">
        <h4>What is your availability for a mentoring call?</h4>
        <div className="details-container">
          <div className="button-container">
            <button className="career-option-button">Monday</button>
            <div className="empty-timetable-box">
            </div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
          </div>

          <div className="button-container">
            <button className="career-option-button">Tuesday</button>
            <div className="empty-timetable-box"></div>
            <div className="filled-timetable-box"></div> {/* Add a filled box */}
            <div className="empty-timetable-box"></div>
            <div className="filled-timetable-box"></div> {/* Add a filled box */}
            <div className="empty-timetable-box"></div>
          </div>

          <div className="button-container">
            <button className="career-option-button">Wednesday</button>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
          </div>

          <div className="button-container">
            <button className="career-option-button">Thursday</button>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
            <div className="empty-timetable-box"></div>
          </div>

          <div className="button-container">
            <button className="career-option-button">Friday</button>
            <div className="empty-timetable-box"></div>
            <div className="filled-timetable-box"></div> {/* Add a filled box */}
            <div className="empty-timetable-box"></div>
            <div className="filled-timetable-box"></div> {/* Add a filled box */}
            <div className="empty-timetable-box"></div>
          </div>
        </div>

        <div className="save-continue-container">
          <button className="save-continue-button">Save and Continue</button>
        </div>
        
        <div className="button-container">
        </div>
      </div>
    </div>
  );
}

export default MentoringCall;
