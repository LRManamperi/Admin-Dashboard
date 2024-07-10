import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import ProfilePopup from './ProfilePopup'; // Ensure the correct path to the ProfilePopup component

function Header({ OpenSidebar }) {
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    console.log('Search icon clicked');
    // For now, just log the search query
    console.log('Search query:', searchQuery);
  };

  const handleNotificationsClick = () => {
    console.log('Notifications icon clicked');
    // Here you can open a dropdown or redirect to notifications page
  };

  const handleMessagesClick = () => {
    console.log('Messages icon clicked');
    // Here you can open a dropdown or redirect to messages page
  };

  const handleProfileClick = () => {
    setProfilePopupVisible(true);
  };

  const closeProfilePopup = () => {
    setProfilePopupVisible(false);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='search-input'
        />
        <BsSearch className='icon' onClick={handleSearchClick} />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' onClick={handleNotificationsClick} />
        <BsFillEnvelopeFill className='icon' onClick={handleMessagesClick} />
        <BsPersonCircle className='icon' onClick={handleProfileClick} />
      </div>
      <ProfilePopup isVisible={isProfilePopupVisible} onClose={closeProfilePopup} />
    </header>
  );
}

export default Header;
