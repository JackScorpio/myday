import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ filter, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div ref={ref} className='ui form' id='filter'>
      <div
        onClick={() => setOpen(!open)}
        className={`ui selection dropdown ${open ? "visible active" : ""}`}
      >
        <i className='dropdown icon'></i>
        <div className='text'>{filter}</div>
        <div className={`menu ${open ? "visible transition" : ""}`}>
          <div className='item' onClick={() => onFilterChange("All")}>
            All
          </div>
          <div className='item' onClick={() => onFilterChange("Done")}>
            Done
          </div>
          <div className='item' onClick={() => onFilterChange("Pending")}>
            Pending
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
