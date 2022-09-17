import React from 'react'
import { Link } from 'react-router-dom'
import cl from './MyNavBar.module.css'

function MyNavBar() {
  return (
    <div>
      <div className={cl.navbar}>
        <div className={cl.navbar__links}>
          <Link className={cl.navbar__link} to="/about">О сайте</Link>
          <Link className={cl.navbar__link} to="/posts">Посты</Link>
        </div>
      </div>
    </div>
  )
}

export default MyNavBar