import React, { useEffect } from 'react';

const RemoveNav = () => {
    useEffect(() => {
        const nextDiv = document.getElementById('__next');
        const nav = nextDiv.querySelector('.navbar-section');
        const popuppage = nextDiv.querySelector('.popup-page');
        if (popuppage) {
          nav.style.display = 'none';  
        }
      }, []); 
      return null; 
    };

export default RemoveNav;