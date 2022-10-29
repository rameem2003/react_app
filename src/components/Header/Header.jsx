import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <header>
            <div className="left">
                <img src="https://rameem2003.github.io/oursite/img/istt1.png" alt="" />
            </div>
            <div className="right">
                <ul>
                    <li> <Link to={"/"}>HOME</Link> </li>
                    <li> <Link to={"/About"}>ABOUT</Link> </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header