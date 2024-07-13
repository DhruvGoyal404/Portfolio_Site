"use client"
import React from 'react';

const WorkSliderBtns = ({ onPrev, onNext, isPrevDisabled, isNextDisabled, containerStyles, btnStyles }) => {
  return (
    <div className={`${containerStyles} flex justify-between items-center z-20`}>
      <div className="flex-1 flex justify-start">
        {!isPrevDisabled && (
          <button className={btnStyles} onClick={onPrev}>
            <span className="text-4xl">&lt;</span>
          </button>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {!isNextDisabled && (
          <button className={btnStyles} onClick={onNext}>
            <span className="text-4xl">&gt;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkSliderBtns;
