import styles from '../styles/Login.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/Link'

export default function Login() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.loginwrapper}>
      <div className={styles.login}>
        <form className={styles.loginform}>
        <h2 className={styles.loginh2}>Log in</h2>
            <input className={styles.inputs} type='text' name='username' placeholder='Username'></input>
            <input className={styles.inputs} type='password' name='password' placeholder='Password'></input>
            <input className={styles.loginbtn} type='submit' value='Login'></input>
            </form>
        </div>
      <div className={styles.notuser}>
      <div className={styles.registernow}>
      <h2 className={styles.registerh2}>Not yet a user? Register now</h2>
      <Link href='/createaccount'><input className={styles.registerbtn} type='submit' value='Register'></input></Link>
        </div>
      </div>
</div>
</div>

  )
}
