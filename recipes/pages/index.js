import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
        <h2 className={styles.homeh2}>Featured Recipes</h2>
        <section className={styles.recipeflex}>
        <div className={styles.recipewrapper}>
        <div className={styles.recipe1}></div><p className={styles.recipepara}>Lorem 
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
.</p></div>
        <div className={styles.recipewrapper}>
        <div className={styles.recipe2}></div><p className={styles.recipepara}>Lorem 
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        <div className={styles.recipewrapper}>
        <div className={styles.recipe3}></div><p className={styles.recipepara}>Lorem 
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat.</p></div>

        </section>
    </div>
  )
}
