import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
            
            <label>username</label>
            <input type="text" placeholder="enter your username"/>
            <label >Password</label>
            <input type="password" placeholder="enter your password" />
            <botton className="loginButton">Login</botton>
        </form>
        <button className="loginRegister">Register</button>
        </div>
  )
}
