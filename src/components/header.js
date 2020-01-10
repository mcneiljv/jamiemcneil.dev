import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <header>
        <h1>Jamie McNeil - Web Developer</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
