import React from "react";

function NavComponent() {
  return (
    <div className="nav-Container">
      <div>
        <h1 style={{fontFamily:"papyrus",color:"gray"}}>LOGO</h1>
      </div>
      <div className="btns">
        <button href="#">HOME</button>

        <button href="#">ABOUT</button>

        <button href="#">MENU</button>

        <button href="#">ORDER</button>

        <button href="#">CONTACT</button>
      </div>
    </div>
  );
}

export default NavComponent;