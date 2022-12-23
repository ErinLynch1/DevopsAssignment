import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.ul}>
        <div className={styles.navleft}>
            <li><Link href='/'>Recipes</Link></li>
            <li><Link href='/'>Chefs</Link></li>
            <li><Link href='/'>Reviews</Link></li>
            <li><Link href='/'>Suprise Me</Link></li>
            </div>
            <div className={styles.navright}>
            <li><Link href='/login'>Login</Link></li>
                /
            <li><Link href='/createaccount'>Register</Link></li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar