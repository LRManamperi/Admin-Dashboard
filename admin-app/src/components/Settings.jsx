import React, { useState } from 'react';

function Settings() {
  const [themeColor, setThemeColor] = useState('#1d2634');
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeColorChange = (e) => {
    setThemeColor(e.target.value);
    document.documentElement.style.setProperty('--theme-color', e.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <h1>Settings</h1>
      
      <div className="setting-item">
        <label htmlFor="theme-color">Theme Color:</label>
        <input
          type="color"
          id="theme-color"
          value={themeColor}
          onChange={handleThemeColorChange}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="dark-mode">Dark Mode:</label>
        <input
          type="checkbox"
          id="dark-mode"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
      </div>

      {/* Add more settings as needed */}
    </div>
  );
}

export default Settings;
