import { useState } from "react";

function Navbar(){

     const [open, setOpen] = useState(false);


    return<>
        <div className="navbar">
            <h1>Vasile Raul</h1>

             <button className="menu-btn" onClick={() => setOpen(!open)}>
                 ☰
            </button>

            <div className={open ? "nav-btns open" : "nav-btns"}>
                <a onClick={() => setOpen(false)} href="#">About</a>
                <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                <a onClick={() => setOpen(false)} href="#contact">Contact</a>
                

            </div>

        </div>
    </>
}

export default Navbar;