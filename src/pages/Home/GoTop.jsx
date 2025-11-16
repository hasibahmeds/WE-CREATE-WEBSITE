import React from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';

const GoTop = () => {
  const goToBtn = (e) => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="top-btn" onClick={goToBtn}>
      <FaChevronCircleUp className='text-amber-500' />
    </div>
  );
};

export default GoTop;