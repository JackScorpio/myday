import React, {useState} from 'react';


const Dropdown = ({ filter, onFilterChange}) => {

  const [open, setOpen] = useState(false);
  
  return(
  <div className="ui form">
    <div className="field">
      <div 
        onClick={() => setOpen(!open)}
        className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
        <i className="dropdown icon"></i>
        <div className="text">{filter}</div>
        <div className={`menu ${open ? 'visible transition' : ''}`}>
          <div className="item" onClick={() => onFilterChange("All")}>All</div>
          <div className="item" onClick={() => onFilterChange("Done")}>Done</div>
          <div className="item" onClick={() => onFilterChange("Pending")}>Pending</div>
        </div>
      </div>
    </div>
  </div>
  )

}

export default Dropdown;