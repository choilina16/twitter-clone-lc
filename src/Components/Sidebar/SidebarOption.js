import React from 'react';
import './SidebarOption.css';

// Pass in an icon, styling, text thru PROPS...jsx
// Icon is capital because it's a component - it's a component because we are passing it in from MUI
function SidebarOption({ active, text, Icon }) {
  return (
    // if you're active (if there's an active prop that has been passed through), then go ahead and add the following (sidebarOption--active (BEM))
    // string interpolation ``
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
