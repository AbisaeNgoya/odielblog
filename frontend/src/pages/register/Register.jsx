
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
        <label >username</label>
        <input type="text" placeholder="username" />
        <label >email</label>
        <input type="email" placeholder="email" />
        <label >password</label>
        <input type="passwordt" />
        <button className="registerButton">Register</button>
      </form>
      <p className="alreadyRegistered"> already have an account</p>


    </div>
  )
}
