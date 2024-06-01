import { useState } from 'react';
import { FaBowlFood } from "react-icons/fa6";
import { MdEmojiTransportation } from "react-icons/md";

function Showicons() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Define an array of icon components
  const iconOptions = [
    { icon: <FaBowlFood />, label: 'Food' },
    { icon: <MdEmojiTransportation />, label: 'Transportation' }
    // Add more icon options as needed
  ];

  return (
    <div>
      <ul>
        {iconOptions.map((option, index) => (
          <li 
            key={index}
            onClick={() => setSelectedIcon(option.icon)} 
            style={{ cursor: 'pointer', listStyleType: 'none', margin: '10px' }}
          >
            {option.icon} {option.label}
          </li>
        ))}
      </ul>
      <h2>Selected Icon:</h2>
      <div>{selectedIcon}</div>
    </div>
  );
}

export default Showicons;
