// ProfilePopup.js
import React from 'react';
import './ProfilePopup.css'; // Make sure to create a corresponding CSS file for styling

function ProfilePopup({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="profile-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="profile-header">
          <img src="https://via.placeholder.com/80" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2>Lakshani Manamperi</h2>
            <p>rasa.me@example.com</p>
          </div>
        </div>
        <div className="profile-details">
          <h3>About Me</h3>
          <p>Senior Manager</p>
          <h3>Settings</h3>
          <ul>
            <li>Account Settings</li>
            <li>Privacy Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePopup;
