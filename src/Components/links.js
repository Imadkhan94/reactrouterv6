import React from 'react';
import {Link} from "react-router-dom";
function LinkBar() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/about"> About</Link>
      <Link to="/product"> Product</Link>
    </div>
  );
}

export default LinkBar;