import { useState } from 'react';
import './RealTime.css';

const SideBar = () => {
  // Initialize state for each slider
  const [sliders, setSliders] = useState(Array(15).fill(50)); // Default all sliders to 50

  // Handle slider change
  const handleSliderChange = (index, value) => {
    const newSliders = [...sliders];
    newSliders[index] = value;
    setSliders(newSliders);
  };

  return (
    <aside className="sidebar">
      <ul className="slider-list">
        {sliders.map((sliderValue, index) => (
          <li key={index} className="slider-item">
            <label>Slider {index + 1}: {sliderValue}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => handleSliderChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
