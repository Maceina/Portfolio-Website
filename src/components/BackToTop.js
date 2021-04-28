import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';


function ScrollToTop(){
  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false);
    }
  };

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <div className="back-to-top" onClick={scrollToTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
        <i className="icofont-simple-up"/>
    </div>
  );
}

export default ScrollToTop;