import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.loginwrapper}>
      </div>
    </div>
  )
}
