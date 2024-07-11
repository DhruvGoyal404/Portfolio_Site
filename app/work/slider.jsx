// WorkSliderBtns.jsx
"use client"
import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const WorkSliderBtns = ({ containerStyles, btnStyles }) => {
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        See More of My Works! <BsArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
