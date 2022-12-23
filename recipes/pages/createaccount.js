import styles from '../styles/Register.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.regcontainer}>
      <div className={styles.regflex}>

      <form className={styles.regform}>
      <h2 className={styles.regh2}>Register</h2>
      <div className={styles.flexform}>
      <input className={styles.inputs} type='text' name='username' placeholder='Username'></input>
      <input className={styles.inputs} type='email' name='email' placeholder='Email'></input>
      </div>
      <div className={styles.flexform}>
      <input className={styles.inputs} type='password' name='pword' placeholder='Password'></input>
      <input className={styles.inputs} type='password' name='confpword' placeholder='Confirm Password'></input>
      </div>
      </form>
      </div>
      <div className={styles.regpic}>
      <div className={styles.regwrapper}>
      <div className={styles.regprofile}>
        </div>
        <button className={styles.updatebtn}>Upload Profile Picture</button>
      </div>
      </div>
      </div></div>
  )
}
